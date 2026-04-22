import Benefits from "../components/Benefits/Benefits"
import GallerySection from "../components/GalleriesSection/GalleriesSection"
import Headers from "../components/Headers/Headers"
import HeroSections from "../components/HeroSections/HeroSections"
import Learn from "../components/Learn/Learn"

const ASSETS_BASE_PATH = "/task-3-adv/assets/imgs"

const benefitsCards = [
    {
        icon: `${ASSETS_BASE_PATH}/book.png`,
        title: "Thematic Learning",
        desc: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
    },
    {
        icon: `${ASSETS_BASE_PATH}/rectangular-graphs.png`,
        title: "STEAM Education",
        desc: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
    },
    {
        icon: `${ASSETS_BASE_PATH}/puzzle.png`,
        title: "Language Immersion",
        desc: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
    },
    {
        icon: `${ASSETS_BASE_PATH}/brush.png`,
        title: "Art and Creativity",
        desc: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
    },
    {
        icon: `${ASSETS_BASE_PATH}/light.png`,
        title: "Outdoor Education",
        desc: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
    },
    {
        icon: `${ASSETS_BASE_PATH}/star.png`,
        title: "Play-Based Learning",
        desc: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
    }
]

const learnCards = [
    {
        image: `${ASSETS_BASE_PATH}/Language.png`,
        subject: "Language Arts",
        desc: "Reading, writing, storytelling, and communication skills."
    },
    {
        image: `${ASSETS_BASE_PATH}/Mathematics.png`,
        subject: "Mathematics",
        desc: "Number sense, basic operations, problem-solving, and logic."
    },
    {
        image: `${ASSETS_BASE_PATH}/Science.png`,
        subject: "Science",
        desc: "Exploring the natural world through hands-on experiments and investigations."
    },
    {
        image: `${ASSETS_BASE_PATH}/Social.png`,
        subject: "Social Studies",
        desc: "Cultivating an understanding of diverse cultures and communities."
    },
    {
        image: `${ASSETS_BASE_PATH}/Arts.png`,
        subject: "Arts and Crafts",
        desc: "Encouraging creativity through various art forms and crafts."
    },
    {
        image: `${ASSETS_BASE_PATH}/Physical.png`,
        subject: "Physical Education",
        desc: "Promoting physical fitness, coordination, and teamwork."
    },
]

const galleries = [
    {
        id: 1,
        images: [
            `${ASSETS_BASE_PATH}/Classrooms1.png`,
            `${ASSETS_BASE_PATH}/Classrooms2.png`,
            `${ASSETS_BASE_PATH}/Classrooms3.png`,
            `${ASSETS_BASE_PATH}/Classrooms4.png`,
            `${ASSETS_BASE_PATH}/Library1.png`,
            `${ASSETS_BASE_PATH}/Library2.png`,
            `${ASSETS_BASE_PATH}/Library3.png`,
            `${ASSETS_BASE_PATH}/Library4.png`
        ],
        title: "Classrooms",
        desc: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
    },
    {
        id: 2,
        images: [
            `${ASSETS_BASE_PATH}/Library1.png`,
            `${ASSETS_BASE_PATH}/Library2.png`,
            `${ASSETS_BASE_PATH}/Library3.png`,
            `${ASSETS_BASE_PATH}/Library4.png`,
            `${ASSETS_BASE_PATH}/Classrooms1.png`,
            `${ASSETS_BASE_PATH}/Classrooms2.png`,
        ],
        title: "Library",
        desc: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
    },
    {
        id: 3,
        images: [
            `${ASSETS_BASE_PATH}/Science1.png`,
            `${ASSETS_BASE_PATH}/Science2.png`,
            `${ASSETS_BASE_PATH}/Science3.png`,
            `${ASSETS_BASE_PATH}/Science4.png`,
            `${ASSETS_BASE_PATH}/Computer3.png`,
            `${ASSETS_BASE_PATH}/Computer4.png`,
        ],
        title: "Science Lab",
        desc: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
    },
    {
        id: 4,
        images: [
            `${ASSETS_BASE_PATH}/Computer1.png`,
            `${ASSETS_BASE_PATH}/Computer2.png`,
            `${ASSETS_BASE_PATH}/Computer3.png`,
            `${ASSETS_BASE_PATH}/Computer4.png`,
            `${ASSETS_BASE_PATH}/Science2.png`,
            `${ASSETS_BASE_PATH}/Science3.png`,
        ],
        title: "Computer Lab",
        desc: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills."
    },
    {
        id: 5,
        images: [
            `${ASSETS_BASE_PATH}/Garden1.png`,
            `${ASSETS_BASE_PATH}/Garden2.png`,
            `${ASSETS_BASE_PATH}/Garden3.png`,
            `${ASSETS_BASE_PATH}/Garden4.png`,
            `${ASSETS_BASE_PATH}/Classrooms1.png`,
            `${ASSETS_BASE_PATH}/Classrooms2.png`,
        ],
        title: "Garden and Nature Area",
        desc: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
    },
]

const Academics = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <HeroSections
                        img={`${ASSETS_BASE_PATH}/hero-squares.png`}
                        btn="Academics"
                        title="Nurturing Young Minds for Success"
                        desc="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
                    />
                </div>
            </section>
            <section className="section features">
                <div className="container">
                    <Headers
                        sectionBtn="Our Features"
                        sectionTitle="Our Special Features"
                        sectionParagraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
                    />
                    <Benefits BenefitsCards={benefitsCards} />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Headers
                        sectionBtn="Our Features"
                        sectionTitle="What Students Learn"
                        sectionParagraph="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
                    />
                    <Learn LearnCards={learnCards} />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Headers
                        sectionBtn="Our Gallery"
                        sectionTitle="Our Rooms Gallery"
                        sectionParagraph="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
                    />
                    <GallerySection Galleries={galleries} />
                </div>
            </section>
        </>
    )
}

export default Academics