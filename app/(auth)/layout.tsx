import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};
const AuthLayout = ({ children }: Props) => {
	return (
		<div>
			<h1>Auth Layout</h1>
			{children}
		</div>
	);
};

export default AuthLayout;
