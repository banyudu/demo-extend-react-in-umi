import { FC } from 'react';

const HomePage: FC<{}> = () => {
  return (
    <div>
      Hello React
    </div>
  )
}

HomePage['data-test-id'] = '123'

export default HomePage
