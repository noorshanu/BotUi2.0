import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import TokenForm from './pages/TokenForm';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import TokenVanity from './pages/TokenVanity';
import RevokePermission from './pages/RevokePermission';
import TokenIssuance from './pages/TokenIssuance';
import TokenCloning from './pages/TokenCloaning';
import FreezeAccount from './pages/FreezeAccount';
import FreezeAccountUI from './pages/FreezeAccountUI';
import BurnToken from './pages/BurnToken';
import UnfreezeTabs from './pages/UnfreezeTabs';
import TokenUpdate from './pages/TokenUpdate';
import CreateMarketForm from './pages/Liquidity/CreateMarketForm';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/createtoken"
          element={
            <>
              <PageTitle title="create token | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <TokenForm />
            </>
          }
        />
        <Route
          path="/token-vanity"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <TokenVanity />
            </>
          }
        />

        <Route
          path="/revoke-permission"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <RevokePermission />
            </>
          }
        />

<Route
          path="/token-issuance"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
           <TokenIssuance/>
            </>
          }
        />
        <Route
          path="/token-clone"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
          <TokenCloning/>
            </>
          }
        />
             <Route
          path="/freeze-account"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
   <FreezeAccount/>
            </>
          }
        />

<Route
          path="/auto-freeze"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
   <FreezeAccountUI/>
            </>
          }
        />
<Route
          path="/unfreeze-token"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
   <UnfreezeTabs/>
            </>
          }
        />
<Route
          path="/burn-token"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
   <BurnToken/>
            </>
          }
        />

<Route
          path="/token-update"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
   <TokenUpdate/>
            </>
          }
        />

<Route
          path="/openid-market"
          element={
            <>
              <PageTitle title="Token Vanity | TailAdmin - Tailwind CSS Admin Dashboard Template" />
 <CreateMarketForm/>
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
