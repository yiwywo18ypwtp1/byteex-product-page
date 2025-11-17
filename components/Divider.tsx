const VerticalDivider = ({ vertical: vertical = false }: { vertical?: boolean }) => {
    return <div className={`bg-gry/30 ${vertical ? "h-full min-w-px self-stretch" : "w-full min-h-px"}`}></div>
}

export default VerticalDivider;