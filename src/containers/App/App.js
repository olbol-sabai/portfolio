import Layout from '../../components/Layout/Layout';
import Landing from '../Landing/Landing';
import Projects from '../Projects/Projects';
import Bio from '../Bio/Bio';
import { Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-use';



const App = () => {

  const location = useLocation()

  return (
    <Layout >
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
          <Route path="/projects" component={Projects} />
          <Route path="/bio" component={Bio} />
          <Route path="/" component={Landing} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
