
import styled from 'styled-components';
import chunk from 'lodash.chunk'
import { DENOMINATIONS } from '../common/constants';
import { Button } from './common/Button'
import DenominationField from './DenominationField';
import { Title } from './common/Title';
import { fromWei, toWei } from '../common/utils';
import { useMediaQuery } from 'react-responsive';
import { FaEthereum } from 'react-icons/fa'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  padding-top: 20px;
  padding-bottom: 20px;
`
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  margin-bottom: 20px;
`
const IconWrapper = styled.div`
  margin-bottom: 20px;
`
const HeaderTitle = styled(Title)`
  font-size: 2em;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: center;
`
const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
`
const PanelButton = styled(Button)`
  font-size: 1.3em;
  padding: 10px;
`


interface HeaderProps {
  weiValue: string
  setWeiValue: (value: string) => void
  isPanelVisible: boolean
  setPanelVisible: (value: boolean) => void
}
export const Header = (props: HeaderProps) => {

  const {
    weiValue,
    setWeiValue,
    isPanelVisible,
    setPanelVisible
  } = props

  const isSmallScreen = useMediaQuery({ query: '(min-width: 400px)' })
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' })

  const itemsPerRow = (
    isLargeScreen ? 3 :
      isSmallScreen ? 2 :
        1
  )

  const rows = chunk(DENOMINATIONS, itemsPerRow)

  return (
    <Container>

      {
        isPanelVisible && (
          <>
            <HeaderTitle>
              {
                isLargeScreen && (
                  <IconWrapper>
                    <FaEthereum />
                  </IconWrapper>
                )
              }
              Ether Denominations
            </HeaderTitle>
            <TopSection>
              {
                rows.map((row) => (
                  <Row key={`row-${row[0]?.unitName}`}>
                    {
                      row
                        .map((denomination) => (
                          <DenominationField
                            key={denomination.unitName}
                            value={fromWei(weiValue, denomination)}
                            onChange={(e) => setWeiValue(toWei(e.target.value, denomination))}
                            index={denomination.index || 0}
                            unitName={denomination.unitName}
                          />
                        ))
                    }
                  </Row>
                ))
              }
            </TopSection>
          </>
        )
      }
      <BottomSection>
        {
          !isPanelVisible && <PanelButton onClick={() => setPanelVisible(true)}>Show Panel</PanelButton>
        }
        {
          isPanelVisible && <PanelButton onClick={() => setPanelVisible(false)}>Hide Panel</PanelButton>
        }
      </BottomSection>
    </Container>
  )
}
