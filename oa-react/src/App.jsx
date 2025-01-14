import React from 'react'
import logo from './logo.svg'
import {Button, FilterGroup, Card, DropDown} from './exports'

function Cards() {
  return (
    <Card>
      <Card className='ss'>
        <Card>
          <Card onClick={() => console.log('second')}>
            <Card>
              <Button onClick={() => console.log('bttn')}>btn</Button>
            </Card>
          </Card>
        </Card>
      </Card>
    </Card>
  )
}
function App() {
  return (
    <div className='App' style={{display: 'flex'}}>
      <DropDown title='DropDown' onClick={e => console.log(e.target)}>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
      </DropDown>

      <button>normal</button>
      <Cards />
      <Button onClick={() => console.log('ssss')} test='aa' className='sss'>
        btn
      </Button>
      {/* use event.isToggleOn to check the status of toggle button */}
      <Button type={'toggle'} onClick={e => console.log(e.isToggleOn)}>
        toggle
      </Button>
      <Card>
        <button>normal</button>
      </Card>

      <Cards />
      <FilterGroup
        filters={['Yes...', 'we', 'are..', 'Filters!', 'Click MEEE!!!!!!']}
        defaultIndex={0}
      />
      <Card>
        <FilterGroup
          filters={['Yes...', 'we', 'are..', 'Filters!', 'Click MEEE!!!!!!']}
          defaultIndex={0}
        />
      </Card>
    </div>
  )
}

export default App
