
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header'
import { Body } from './components/Body'
import { LOCAL_STORAGE_KEY } from './common/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

function App() {

  const [weiValue, setWeiValue] = useState<string>('')
  const [isPanelVisible, setPanelVisible] = useState<boolean>(false)

  // When value changes, open panel and update storage
  useEffect(() => {
    if (!weiValue) {
      return
    }
    setPanelVisible(true)
    if (window.localStorage) {
      window.localStorage.setItem('weiValue', weiValue)
    }
  }, [weiValue])

  // On init, load previous value
  useEffect(() => {
    if (window.localStorage) {
      const lastSessionValue = window.localStorage.getItem(LOCAL_STORAGE_KEY)
      if (lastSessionValue) {
        setWeiValue(lastSessionValue)
      }
    }
  }, [])

  return (
    <Container>
      <Header
        weiValue={weiValue}
        setWeiValue={setWeiValue}
        isPanelVisible={isPanelVisible}
        setPanelVisible={setPanelVisible}
      />
      <Body
        weiValue={weiValue}
        setWeiValue={setWeiValue}
        isPanelVisible={isPanelVisible}
      />
    </Container>
  );
}

export default App;
