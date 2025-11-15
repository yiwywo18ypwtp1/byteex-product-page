const TopAlert = () => {
    return (
        <div className="bg-bge flex items-center justify-center h-9 w-full md:w-full md:h-9">
            <span className="text-gry text-xs tracking-widest md:hidden">
                FREE SHIPPING on orders {">"} $200.
            </span>

            <span className="hidden md:block md:text-gry md:text-xs md:tracking-widest">
                CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)   |   FREE SHIPPING on orders {">"} $200   |   easy 45 day return window.
            </span>
        </div>


    )
}

export default TopAlert;