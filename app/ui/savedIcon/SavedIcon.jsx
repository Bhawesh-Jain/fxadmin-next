import { useEffect, useState } from "react";

const iconLibraries = {
  ai: () => import("react-icons/ai"),
  bs: () => import("react-icons/bs"),
  bi: () => import("react-icons/bi"),
  di: () => import("react-icons/di"),
  fi: () => import("react-icons/fi"),
  fa: () => import("react-icons/fa"),
  gi: () => import("react-icons/gi"),
  hi: () => import("react-icons/hi"),
  im: () => import("react-icons/im"),
  io: () => import("react-icons/io"),
  md: () => import("react-icons/md"),
  ri: () => import("react-icons/ri"),
  si: () => import("react-icons/si"),
  ti: () => import("react-icons/ti"),
  wi: () => import("react-icons/wi"),
};

const SavedIcon = ({ library, icon }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      if (iconLibraries[library]) {
        try {
          const lib = await iconLibraries[library]();
          setIconComponent(() => lib[icon]);
        } catch (error) {
          console.error(`Error loading icon ${icon} from library ${library}`, error);
        }
      }
    };

    loadIcon();
  }, [library, icon]);

  if (!IconComponent) {
    return <div>Loading...</div>;
  }

  return <IconComponent size={50} />;
};

export default SavedIcon;
