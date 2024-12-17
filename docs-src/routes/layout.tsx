import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import { Outlet, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import { Icon } from "@mdi/react";
import { mdiMoonWaxingCrescent, mdiWhiteBalanceSunny, mdiMenu, mdiClose, mdiGithub } from "@mdi/js";
import { Button } from "../../src/main";
import "./style.css";

type Story = {
  title: string;
  storyList: string[];
};

const Breadcrumbs = ({
  stories,
  pathname,
  onClick,
}: {
  stories: Story[];
  pathname: string;
  onClick: () => void;
}) => {
  const pathParts = pathname.split("/").filter(Boolean);
  if (!pathParts.length) return null;
  const root = stories.find(({ title }) => title.toLowerCase() === pathParts[0].toLowerCase());
  const sub =
    root && pathParts[1]
      ? root.storyList.find((it) => it.toLowerCase() === pathParts[1].toLowerCase())
      : "Default";
  if (!root) return null;
  return (
    <Button
      as="a"
      className="xs:hidden justify-start pl-0"
      variant="text"
      role="button"
      onClick={onClick}
    >
      <span className="p">{root.title[0].toUpperCase() + root.title.slice(1)}</span>
      <span className="mx-1"> › </span>
      <span className="p">{sub}</span>
    </Button>
  );
};

export const Layout = ({ stories }: { stories: Story[] }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const [asideOpen, setAsideOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      navigate("/examples/profilesettings");
    }
  }, [pathname, navigate]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [pathname]);

  const onClickOutside = (e: Event) => {
    if (!asideRef.current?.contains(e.target as Node)) {
      setAsideOpen(false);
    }
  };

  const toggleListener = (active: boolean) => {
    setTimeout(() => {
      document[active ? "addEventListener" : "removeEventListener"]("click", onClickOutside);
    });
  };

  useEffect(() => {
    toggleListener(asideOpen);
    return () => {
      toggleListener(false);
    };
  }, [asideOpen]);

  return (
    <div className="stories">
      <header className="stories__header">
        <div className="stories__header-title">
          <a href="/" style={{ textDecoration: "none", color: "var(--primary-text)" }}>
            <h1>Atoms</h1>
          </a>
        </div>
        <HeaderActions asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
      </header>
      <div className="stories__container">
        <aside
          className={["stories__aside", asideOpen && "stories__aside--open"]
            .filter(Boolean)
            .join(" ")}
        >
          <nav className="stories__nav" ref={asideRef}>
            <ul className="stories__nav-list">
              {stories.map((item) => (
                <NavItem key={item.title} {...item} setAsideOpen={setAsideOpen} />
              ))}
            </ul>
          </nav>
        </aside>
        <section
          className={["stories__main", asideOpen && "stories__main--aside-open"]
            .filter(Boolean)
            .join(" ")}
          ref={mainRef}
        >
          <div className="stories__main-inner">
            <Breadcrumbs
              stories={stories}
              pathname={pathname}
              onClick={() => {
                setAsideOpen(true);
              }}
            />
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
};

type NavItemProps = {
  title: string;
  storyList: string[];
  setAsideOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavItem = ({ title, storyList, setAsideOpen }: NavItemProps) => {
  const path = `/${title.toLocaleLowerCase()}/${storyList[0].toLocaleLowerCase()}`;
  const push = useNavigate();
  return (
    <li
      className="stories__nav-item"
      onClick={() => {
        push(path);
        setAsideOpen(false);
      }}
    >
      <h4>{title}</h4>
      <ul className="stories__subnav-list">
        {storyList.map((item) => (
          <SubItem
            key={`${title}-${item}`}
            title={title}
            story={item}
            setAsideOpen={setAsideOpen}
          />
        ))}
      </ul>
    </li>
  );
};

type SubItemProps = {
  title: string;
  story: string;
  setAsideOpen: Dispatch<SetStateAction<boolean>>;
};

export const SubItem = ({ title, story, setAsideOpen }: SubItemProps) => {
  const { pathname } = useLocation();
  const path = `/${title.toLocaleLowerCase()}/${story.toLocaleLowerCase()}`;
  const isActive = path === pathname;

  return (
    <li className={`stories__sub-item${isActive ? " stories__sub-item--active" : ""}`}>
      <Link
        to={path}
        onClick={(e) => {
          e.stopPropagation();
          setAsideOpen(false);
        }}
      >
        {story}
      </Link>
    </li>
  );
};

export const HeaderActions = ({
  asideOpen,
  setAsideOpen,
}: {
  asideOpen: boolean;
  setAsideOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const onSwitchMode = () => {
    const html = document.querySelector("html");
    const m = mode === "dark" ? "light" : "dark";
    setMode(m);
    if (html) html.dataset.theme = m;
  };

  return (
    <>
      <div className="stories__header-actions">
        <button
          className="stories__header-btn"
          onClick={() => window.open("https://github.com/dimslaev/atoms")}
        >
          <Icon path={mdiGithub} />
        </button>
        <button className="stories__header-btn" onClick={onSwitchMode}>
          <Icon path={mode === "dark" ? mdiWhiteBalanceSunny : mdiMoonWaxingCrescent} />
        </button>

        <button className="stories__header-btn" onClick={() => setAsideOpen(!asideOpen)}>
          <Icon path={asideOpen ? mdiClose : mdiMenu} />
        </button>
      </div>
    </>
  );
};
