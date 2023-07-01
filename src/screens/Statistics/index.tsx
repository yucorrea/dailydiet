import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { HeaderPercent } from '@components/HeaderPercent';
import { StatisticsCard } from '@components/StatisticsCard';
import { Statitics } from '@screens/Home';

import { Column, Container, Content, GridRow, Title } from "./styles";

export function Statistics() {
  const { COLORS } = useTheme();

  const { bestSequencyOnDiet, totalNotDiet, totalOnDiet, totalRegistred, percentOnDiet } = useRoute().params as Statitics;

  return (
    <Container>
      <HeaderPercent percentage={percentOnDiet} />

      <Content>

        <Title>Estatísticas gerais</Title>

        <StatisticsCard title={`${bestSequencyOnDiet}`} description='melhor sequência de pratos dentro da dieta' />
        <StatisticsCard title={`${totalRegistred}`} description='refeições registradas' />

        <GridRow>
          <Column>
            <StatisticsCard title={`${totalOnDiet}`} description='refeições dentro da dieta' backgroundColor={COLORS.GREEN_LIGHT} />
          </Column>

          <Column>
            <StatisticsCard title={`${totalNotDiet}`} description='refeições fora da dieta' backgroundColor={COLORS.RED_LIGHT} />
          </Column>
        </GridRow>

      </Content>
    </Container>
  );
}