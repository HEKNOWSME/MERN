import Auth from "../../users/pages/Auth";
import { useState } from "react";
import Register from "../../users/pages/Register";

const AuthPage = () => {
	const [showLogin, setLogin] = useState(true);
	if (showLogin) return <Auth onRegister={() => setLogin(false)} />;
	return <Register onRegister={() => setLogin(true)} />;
};

export default AuthPage;
