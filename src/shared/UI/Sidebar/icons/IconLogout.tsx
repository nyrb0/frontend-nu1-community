import { ISvg } from '@/shared/types/svg.types';

const IconLogout: React.FC<ISvg> = ({ ...props }) => {
    return (
        <svg {...props} width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M2.625 2.82812H2.57812V2.875V17.125V17.1719H2.625H7.5C7.78594 17.1719 8.06016 17.2855 8.26235 17.4877C8.46454 17.6898 8.57812 17.9641 8.57812 18.25C8.57812 18.5359 8.46454 18.8102 8.26235 19.0123C8.06016 19.2145 7.78594 19.3281 7.5 19.3281H1.5C1.21406 19.3281 0.939838 19.2145 0.73765 19.0123C0.535463 18.8102 0.421875 18.5359 0.421875 18.25V1.75C0.421875 1.46406 0.535463 1.18984 0.73765 0.987651C0.939838 0.785463 1.21406 0.671875 1.5 0.671875H7.5C7.78594 0.671875 8.06016 0.785463 8.26235 0.987651C8.46454 1.18984 8.57812 1.46406 8.57812 1.75C8.57812 2.03594 8.46454 2.31016 8.26235 2.51235C8.06016 2.71454 7.78594 2.82812 7.5 2.82812H2.625ZM18.7628 9.23721L18.7628 9.23725C18.8633 9.33747 18.943 9.45653 18.9973 9.58761C19.0516 9.71869 19.0796 9.85921 19.0795 10.0011C19.0794 10.143 19.0513 10.2835 18.9968 10.4145C18.9423 10.5455 18.8625 10.6645 18.7619 10.7646L18.7619 10.7647L15.0119 14.5147C14.8093 14.7172 14.5346 14.831 14.2481 14.831C13.9617 14.831 13.6869 14.7172 13.4844 14.5147C13.2818 14.3121 13.168 14.0374 13.168 13.7509C13.168 13.4645 13.2818 13.1898 13.4844 12.9872C13.4844 12.9872 13.4844 12.9872 13.4844 12.9872L15.3144 11.1582L15.3945 11.0781H15.2812H7.5C7.21406 11.0781 6.93984 10.9645 6.73765 10.7623C6.53546 10.5602 6.42188 10.2859 6.42188 10C6.42188 9.71406 6.53546 9.43984 6.73765 9.23765C6.93984 9.03546 7.21406 8.92188 7.5 8.92188H15.2812H15.3945L15.3144 8.84184L13.4853 7.01467C13.2828 6.81211 13.169 6.53739 13.169 6.25094C13.169 5.96448 13.2828 5.68976 13.4853 5.48721C13.6879 5.28465 13.9626 5.17086 14.2491 5.17086C14.5355 5.17086 14.8102 5.28465 15.0128 5.48721L18.7628 9.23721Z'
                fill='var(--white-color)'
                stroke='var(--white-color)'
                stroke-width='0.09375'
            />
        </svg>
    );
};

export default IconLogout;
