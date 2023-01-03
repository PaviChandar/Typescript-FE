import ClassCounter from './components/ClassCounter';
import ConditionalRender from './components/CondtionalRender';
import ContextMain from './components/ContextMain';
import ErrorBoundary from './components/ErrorBoundary';
import FunctionalCounter from './components/FunctionalCounter';
import { HOCMain } from './components/HOCMain';
import HOCSample from './components/HOCSample';
import HtmlProps from './components/HtmlProps';
import Person from './components/Person';
import PWCSample from './components/PWCSample';
import PropsWithChild from './components/ReactFC';
import RefsDemo from './components/RefsDemo';
import SetTimeOut from './components/SetTimeOut';
import UseFetch from './components/UseFetch';
import UseLocalStorage from './components/UseLocalStorage';
import UseMedia from './components/UseMedia';

const App = () => {

  const personName = {
    first: "Pavi",
    last: "Chandar"
  }

  const HOCExample = HOCMain(HOCSample)

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
      <ConditionalRender name="Pavi" isLoggedIn={true} messageCount={5} />
      <Person name={personName} />
      {/* <SetTimeOut /> */}
      <HOCExample />
      <ContextMain />
    </div>
  );
}

export default App;
