import Head from "next/head";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import { useEffect } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import classNames from "classnames";

const Layout = ({
  children,
  title = "",
  description = "",
  footer = true,
  dark = false,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => nProgress.start();
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => nProgress.done());
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`Portafolio Raul Lopez - ${title}`}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div className={classNames({'bg-dark': dark})}>
        {/* <Navbar /> */}
        {/* <main className="container py-4">{children}</main> */}
      {children}
        {/* {footer && <Footer />} */}
      </div>
    </>
  );
};

export default Layout;
