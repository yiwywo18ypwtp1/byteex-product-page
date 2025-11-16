import Button from "./Button"
import Raiting from "./Raiting"

const ButtonRaitingBlock = () => {
    return <div className="w-full flex flex-col items-center px-6">
        <Button text="Customize Your Outfit" />
        <Raiting />
    </div>
}

export default ButtonRaitingBlock;