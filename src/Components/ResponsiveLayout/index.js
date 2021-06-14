import { useWindowsDimensions } from '../WindowDimensionsProvider'

const ResponsiveLayout = ({ breakpoint = 768, showMobile, showDesktop }) => {
    const { width } = useWindowsDimensions();
    return (width > breakpoint ? showDesktop() : showMobile())
}

export default ResponsiveLayout;
