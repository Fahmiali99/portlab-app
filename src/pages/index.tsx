import HomePage from "@/modules/home";
import nookies from "nookies";

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);

  if (!cookies.accessToken) {
    return {
      props: {
        auth: false,
      },
    };
  }

  return {
    props: {
      auth: true,
      // role: cookies.role,
    },
  };
};

export default HomePage;
