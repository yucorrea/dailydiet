import { useNavigation } from '@react-navigation/native';

import success from '@assets/images/success.png';
import fail from '@assets/images/fail.png';

import { Button } from "@components/Button";


import { Container, FeedbackHighlight, Title, Description, Logo } from "./styles";

const feedback = {
  in: {
    title: 'Continue assim!',
    description: 'Você continua dentro da dieta. Muito bem!',
    logo: success
  },
  out: {
    title: 'Que pena!',
    description: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
    logo: fail
  }
}

export function Feedback() {

  const navigation = useNavigation();


  function handleToInitialScreen() {
    navigation.navigate('home')
  }

  const status = 'in';


  return (
    <Container>

      <FeedbackHighlight>
        <Title status={status}>{feedback[status].title}</Title>
        <Description>{feedback[status].description}</Description>
      </FeedbackHighlight>


      <Logo source={feedback[status].logo} />

      <Button title="Ir para a página inicial" onPress={handleToInitialScreen} style={{ width: 190 }} />

    </Container>
  );
}