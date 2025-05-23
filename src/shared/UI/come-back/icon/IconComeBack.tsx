import { ISvg } from '@/shared/types/svg.types';

const IconComeBack: React.FC<ISvg> = ({ ...props }) => {
    return (
        <svg {...props} width='24' height='20' viewBox='0 0 24 20' style={{ cursor: 'pointer' }} fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_d_48_196)'>
                <path
                    d='M11 1L4 8L11 15M4 8H20H4Z'
                    stroke='#B0B0B0'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    shapeRendering='crispEdges'
                />
            </g>
            <defs>
                <filter id='filter0_d_48_196' x='-1' y='0' width='26' height='24' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_48_196' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_48_196' result='shape' />
                </filter>
            </defs>
        </svg>
    );
};

export default IconComeBack;
