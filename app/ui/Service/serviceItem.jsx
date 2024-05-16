import PrimaryBtn from "../Skeleton/PrimaryBtn/PrimaryBtn";
import SavedIcon from "../savedIcon/SavedIcon";

const ServiceItem = ({ item }) => {
    const iconName = item.icon
    const library = iconName.slice(0, 2).toLowerCase();

    return (
        <div className="text-black m-3 p-3 border border-solid border-gray-300 rounded-lg bg-white flex flex-col items-center">
            <div className="mt-5">
                <SavedIcon library={library} iconName={iconName} />
            </div>

            <h1 className="text-center font-bold mt-8 mb-4 text-lg">{item.name}</h1>

            <p className="text-center text-sm mb-4">{item.description}</p>

            <div className="flex flex-row gap-3 my-3 w-full items-center justify-around">
                <div className="hidden w-1/3"></div>
                <PrimaryBtn color="green" text="Edit" width="1/3" />
                <PrimaryBtn color="red" text="Delete" width="1/3" />
            </div>
        </div>
    );
};

export default ServiceItem;
