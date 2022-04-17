// REF: https://nextjs.org/docs/advanced-features/custom-app
import dynamic from 'next/dynamic';

const DynamicNavigationBar = dynamic(() => import('../src/components/Navigation'))
const App = ({Component, pageProps }) => (
    <>
        <DynamicNavigationBar />
        <Component {...pageProps} />
    </>
   
);

export default App;