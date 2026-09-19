type SectionHeaderTypes = {
    kicker: any,
    children: any,
    description: string,
    center: boolean
};

export function SectionHeader({ kicker, children, description, center = false }: SectionHeaderTypes) {
    return <div className={`${center ? 'mx-auto text-center' : ''} max-w-[720px]`}>
        <p className="section-kicker mb-4">{kicker}</p>
        <h2 className="section-heading">
            {children}
        </h2>
        {description &&
            <p className="mt-5 text-[15px] leading-[1.85] text-ink/70 sm:text-[17px]">
                {description}
            </p>
        }
    </div>;
}