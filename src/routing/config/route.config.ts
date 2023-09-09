import { privateRoute } from "./private.route";
import { publicRoute } from "./public.route";


export const routingConfig = {
    private: privateRoute,
    public: publicRoute,
    defaultRedirect: "/login",
};