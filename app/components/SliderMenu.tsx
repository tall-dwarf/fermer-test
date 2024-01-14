import { IconBtn } from "@/app/components/IconsBtn";

type SliderMenuProps = {
    onBtnPrefClick: () => void
    onBtnNextClick: () => void
}

export default function SliderMenu({onBtnPrefClick, onBtnNextClick}: SliderMenuProps){

    return(
        <div className='slider__menu'>
                <IconBtn onclick={() => onBtnPrefClick()} type='pref' />
                <IconBtn onclick={() => onBtnNextClick()} type='next' />
            </div>
    )
}