import CreateQuotation from "../pages/Create_Quotation/CreateQuotation";
import NotFound from "../pages/NotFound/NotFound";

const AllRoutes = [
  {
    path: "/createQuotation",
    element: <CreateQuotation />,
  },
  {
    path: "/404-notfound",
    element: <NotFound />,
  },
];

export default AllRoutes;
