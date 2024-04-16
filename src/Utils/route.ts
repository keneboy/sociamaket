import { lazy } from "react";
const ProductDetails = lazy(() => import("../pages/productDetails"));
const Home = lazy(() => import("../pages/Home"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
const ResetPassword = lazy(() => import("../pages/ResetPassword"));
const Profile = lazy(() => import("../pages/Profile"));
const ProfileSaved = lazy(() => import("../pages/ProfileSaved"));
const Message = lazy(() => import("../pages/Message"));
const Faq = lazy(() => import("../pages/Faq"));
const Notification = lazy(() => import("../pages/Notification"));
const PersonalSettingDetails = lazy(
  () => import("../pages/PersonalSettingDetails")
);
const DisabledChat = lazy(() => import("../pages/DisabledChat"));
const ManageNotification = lazy(() => import("../pages/ManageNotification"));
const ChangePhone = lazy(() => import("../pages/ChangePhone"));
const EmailSetting = lazy(() => import("../pages/EmailSetting"));
const DeleteAccount = lazy(() => import("../pages/DeleteAccount"));
const PremiumService = lazy(() => import("../pages/PremiumService"));
const MyBalance = lazy(() => import("../pages/MyBalance"));
const RealEstate = lazy(() => import("../pages/RealEstate"));
const Setting = lazy(() => import("../pages/Setting"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Post = lazy(() => import("../components/ListProduct/Post"));
const CustomedForm = lazy(() => import("../components/auth/CustomedForm"));
const ComboBoxExample = lazy(() => import("../components/auth/FloatLabel"));

const routePath = () => {
  const routeData = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/products/:id",
      component: ProductDetails,
    },
    {
      path: "/forget-password",
      component: ForgetPassword,
    },
    {
      path: "/change-password",
      component: ResetPassword,
    },
    {
      path: "/profile-message",
      component: Message,
      isProtected: true,
    },
    {
      path: "/faq",
      component: Faq,
    },
    {
      path: "/profile/settings/change-password",
      component: Setting,
      isProtected: true,
    },
    {
      path: "/profile/settings/contact-details",
      component: PersonalSettingDetails,
      isProtected: true,
    },
    {
      path: "/profile/settings/chats",
      component: DisabledChat,
      isProtected: true,
    },
    {
      path: "/profile/settings/notification",
      component: ManageNotification,
      isProtected: true,
    },
    {
      path: "/profile/settings/phone",
      component: ChangePhone,
      isProtected: true,
    },
    {
      path: "/profile/settings/delete",
      component: DeleteAccount,
      isProtected: true,
    },
    {
      path: "/profile/settings/email",
      component: EmailSetting,
      isProtected: true,
    },
    {
      path: "/profile/my-balance/current",
      component: MyBalance,
      isProtected: true,
    },
    {
      path: "/profile/notification",
      component: Notification,
      isProtected: true,
    },
    {
      path: "/premium-services",
      component: PremiumService,
      isProtected: true,
    },
    {
      path: "/sc/boost/real_estate",
      component: RealEstate,
      isProtected: true,
    },
    {
      path: "/profile",
      component: Profile,
      isProtected: true,
    },
    {
      path: "/profile/adverts",
      component: Profile,
      isProtected: true,
    },
    {
      path: "/profile/saved",
      component: ProfileSaved,
      isProtected: true,
    },
    {
      path: "/post/:type",
      component: Post,
      isProtected: true,
    },
    {
      path: "/test",
      component: CustomedForm,
    },
    {
      path: "/new",
      component: ComboBoxExample,
    },
    {
      path: "*",
      component: NotFound,
    },
  ];
  return routeData;
};
export default routePath;
