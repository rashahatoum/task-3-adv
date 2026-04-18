import HeroSections from "../components/HeroSections/HeroSections"

const Admissions = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <HeroSections
                        img="/task-3-adv/assets/imgs/hero-squares.png"
                        btn="Admission"
                        title="Join Our Family of Young Learners"
                        desc="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school."
                    />
                </div>
            </section>
        </>
    )
}

export default Admissions