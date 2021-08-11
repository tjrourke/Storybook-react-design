
interface ModalMainProps {
    children: React.ReactNodeArray | null | undefined,
    title: string,
    show: boolean,
    size: "sm" | "lg" | "xl" | null | undefined,
    static: boolean
};

export default ModalMainProps;