import { useNavigation, useRoute } from '@react-navigation/native';

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

  const { onDiet } = useRoute().params as { onDiet: boolean }

  function handleToInitialScreen() {
    navigation.navigate('home')
  }


  return (
    <Container>

      <FeedbackHighlight>
        <Title onDiet={onDiet}>{feedback[onDiet ? 'in' : 'out'].title}</Title>
        <Description>{feedback[onDiet ? 'in' : 'out'].description}</Description>
      </FeedbackHighlight>


      <Logo source={feedback[onDiet ? 'in' : 'out'].logo} />

      <Button title="Ir para a página inicial" onPress={handleToInitialScreen} style={{ width: 190 }} />

    </Container>
  );
}