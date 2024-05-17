// "use client"


// import { useEffect, useState } from "react";



// const getIconComponent = async (library, iconName) => {
//     const module = await import(`react-icons/${library}`);
//     return module[iconName];
// };

// const DisplayIcon = ({ iconName, library }) => {
//     const [IconComponent, setIconComponent] = useState(null);


//     useEffect(() => {
//         if (iconName) {
//             getIconComponent(iconName, library)
//                 .then((Icon) => {
//                     setIconComponent(() => Icon);
//                 })
//                 .catch(error => {
//                     console.error('Error loading icon component:', error);
//                 });
//         }
//     }, []);

//     return (
//         <div>
//             {IconComponent ? <IconComponent /> : 'Loading icon...'}
//         </div>
//     );
// };

// export default DisplayIcon;