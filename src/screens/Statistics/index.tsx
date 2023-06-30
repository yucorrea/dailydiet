import { HeaderPercent } from '@components/HeaderPercent';

import { Column, Container, Content, GridRow, Title } from "./styles";
import { StatisticsCard } from '@components/StatisticsCard';
import { useTheme } from 'styled-components/native';

export function Statistics() {

  let percentage = 30.21;

  const { COLORS } = useTheme();

  return (
    <Container>
      <HeaderPercent percentage={percentage} />

      <Content>

        <Title>Estatísticas gerais</Title>

        <StatisticsCard title='22' description='melhor sequência de pratos dentro da dieta' />
        <StatisticsCard title='109' description='refeições registradas' />

        <GridRow>
          <Column>
            <StatisticsCard title='99' description='refeições dentro da dieta' backgroundColor={COLORS.GREEN_LIGHT} />
          </Column>

          <Column>
            <StatisticsCard title='10' description='refeições fora da dieta' backgroundColor={COLORS.RED_LIGHT} />
          </Column>
        </GridRow>

      </Content>
    </Container>
  );
}