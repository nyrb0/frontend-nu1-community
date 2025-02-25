const IconPerson = ({ onClick }: { onClick: () => void }) => {
    return (
        <svg
            onClick={onClick}
            width='22'
            height='17'
            viewBox='0 0 22 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            xlinkHref='http://www.w3.org/1999/xlink'
        >
            <mask id='mask0_82_1570' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='22' height='17'>
                <rect width='22' height='17' fill='url(#pattern0_82_1570)' />
            </mask>
            <g mask='url(#mask0_82_1570)'>
                <path d='M-4 -9H38V32H-4V-9Z' fill='#A8A8A8' />
            </g>
            <defs>
                <pattern id='pattern0_82_1570' patternContentUnits='objectBoundingBox' width='1' height='1'>
                    <use xlinkHref='#image0_82_1570' transform='matrix(0.010989 0 0 0.0142211 0 -0.00484809)' />
                </pattern>
                <image
                    id='image0_82_1570'
                    width='91'
                    height='71'
                    xlinkHref='data:image/png;base64,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'
                />
            </defs>
        </svg>
    );
};

export default IconPerson;
