"use client"
import { useEffect, useState } from "react";

const importIconComponent = async (library, iconName) => {
    try {
        const { default: IconComponent } = await import(`react-icons/${library}/${iconName}`);
        return IconComponent;
    } catch (error) {
        console.error('Error importing icon component:', error);
        return null;
    }
};

const SavedIcon = ({ library, iconName }) => {
    const [IconComponent, setIconComponent] = useState(null);

    useEffect(() => {
        const fetchIconComponent = async () => {
            const iconComponent = await importIconComponent(library, iconName);
            setIconComponent(iconComponent);
        };

        fetchIconComponent();
    }, [library, iconName]);

    if (!IconComponent) {
        return <div>Loading...</div>; // or handle error
    }

    return <IconComponent />;
};

export default SavedIcon;