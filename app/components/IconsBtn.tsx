

type IconBtnProps = {
    type: "next" | 'pref',
    onclick: () => void
}

export function IconBtn({ type, onclick }: IconBtnProps) {

    if (type === 'next') {
        return (
            <div onClick={() => onclick()} role='button' className='icon-btn'>
                <svg className='icon-btn__svg' viewBox="0 0 173 23" xmlns="http://www.w3.org/2000/svg">
                    <rect className="icon-btn__line" transform="matrix(-1 8.74228e-08 8.74228e-08 1 172 10)" />
                    <path d="M161 0V0C161 6.07513 165.925 11 172 11L173 11" strokeWidth="3" />
                    <path d="M161 23V23C161 16.9249 165.925 12 172 12L173 12" strokeWidth="3" />
                </svg>
            </div>
        )
    }

    if (type === 'pref') {
        return (
            <div onClick={() => onclick()} role='button' className='icon-btn'>
                <svg className='icon-btn__svg' viewBox="0 0 173 23" xmlns="http://www.w3.org/2000/svg">
                    <rect className="icon-btn__line" x="1" y="10" />
                    <path d="M12 0V0C12 6.07513 7.07513 11 0.999998 11L-1.33918e-06 11" strokeWidth="3" />
                    <path d="M12 23V23C12 16.9249 7.07513 12 1 12L6.11999e-07 12" strokeWidth="3" />
                </svg>
            </div>
        )
    }

}