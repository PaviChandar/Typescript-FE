import ClassCounter from './components/ClassCounter';
import ErrorBoundary from './components/ErrorBoundary';
import FunctionalCounter from './components/FunctionalCounter';
import HtmlProps from './components/HtmlProps';
import PWCSample from './components/PWCSample';
import PropsWithChild from './components/ReactFC';
import RefsDemo from './components/RefsDemo';
import UseFetch from './components/UseFetch';
import UseLocalStorage from './components/UseLocalStorage';
import UseMedia from './components/UseMedia';

const App = () => {
  return (
    <div className="App">
      <PropsWithChild title="REACT.FC sample" children={<h4>hello world</h4>} />
      <PWCSample heading='PROPSWITHCHILDREN sample' children="hi" />
      <HtmlProps submit={true} children="button clicked" />
      <ClassCounter />
      <FunctionalCounter />
      <ErrorBoundary />
      <RefsDemo />
      <UseLocalStorage />
      <UseMedia />
      <UseFetch />
    </div>
  );
}

export default App;
