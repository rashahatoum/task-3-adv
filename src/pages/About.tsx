import Awards from "../components/Awards/Awards"
import Headers from "../components/Headers/Headers"
import HeroSections from "../components/HeroSections/HeroSections"
import History from "../components/History/History"
import Members from "../components/Members/Members"
import OurMission from "../components/OurMission/OurMission"

const About = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <HeroSections
            img="/assets/imgs/hero-squares.png"
            btn="Overview"
            title="Welcome to Little Learners Academy"
            desc="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Headers
            sectionBtn="Mission & Visions"
            sectionTitle="Our Mission & Visions"
            sectionParagraph="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
          />
          <OurMission
            ourMissionCards={[
              {
                title: "Mission",
                icon: "/assets/imgs/mountain.png",
                desc: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
              },
              {
                title: "Vision",
                icon: "/assets/imgs/scope.png",
                desc: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
              },
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Headers
            sectionBtn="Our Achievements"
            sectionTitle="Our Awards and Recognitions"
            sectionParagraph="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
          />
          <Awards
            BenefitsCards={[
              {
                icon: "/assets/imgs/circle-graphs.png",
                title: "Outstanding Early Childhood Education Awar",
                desc: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
              },
              {
                icon: "/assets/imgs/rectangular-graphs.png",
                title: "Innovative STEAM Education Award",
                desc: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
              },
              {
                icon: "/assets/imgs/thunder.png",
                title: "Environmental Stewardship Award",
                desc: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
              },
              {
                icon: "/assets/imgs/flag.png",
                title: "Play-Based Learning",
                desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
              },
              {
                icon: "/assets/imgs/ball.png",
                title: "Individualized Attention",
                desc: "Our small class sizes enable personalized attention, catering to each child's unique needs."
              },
              {
                icon: "/assets/imgs/people.png",
                title: "Parent Involvement",
                desc: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
              }
            ]} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Headers
            sectionBtn="Our Progressive Journey"
            sectionTitle="Our History"
            sectionParagraph="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
          />
          <History
            HistoryLines={[
              {
                year: "2023",
                img: "/assets/imgs/about-squares.png",
                title: "Resilience and Future Horizons",
                desc: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
              },
              {
                year: "2017",
                img: "/assets/imgs/about-squares.png",
                title: "Innovation and Technology",
                desc: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
              },
              {
                year: "2012",
                img: "/assets/imgs/about-squares.png",
                title: "Expansion and Recognition",
                desc: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
              },
              {
                year: "2005",
                img: "/assets/imgs/about-squares.png",
                title: "Inception and Growth",
                desc: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
              }
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Headers
            sectionBtn="Our Teachers With Experties"
            sectionTitle="Our Teachers With Experties"
            sectionParagraph="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
          />
          <Members
            MemberCards={[
              {
                img: "/assets/imgs/MsSarah.png",
                name: "Ms. Sarah Anderson",
                title: "Qualification:Bachelor's Degree in Early Childhood Education",
                desc: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
              },
              {
                img: "/assets/imgs/MrDavid.png",
                name: "Mr. David Roberts",
                title: "Qualification: Master's Degree in Elementary Education",
                desc: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
              },
              {
                img: "/assets/imgs/MsEmily.png",
                name: "Ms. Emily Hernandez",
                title: "Qualification: Diploma in Child Psychology",
                desc: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
              },
              {
                img: "/assets/imgs/MrMichael.png",
                name: "Mr. Michael Turner",
                title: "Qualification: Bachelor's Degree in Physical Education",
                desc: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
              },
              {
                img: "/assets/imgs/MsJessica.png",
                name: "Ms. Jessica Lee",
                title: "Qualification: Master's Degree in Special Education",
                desc: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
              },
              {
                img: "/assets/imgs/MrWilliam.png",
                name: "Mr. William Parker",
                title: "Qualification: Bachelor's Degree in Fine Arts",
                desc: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
              }
            ]}
          />
        </div>
      </section>
    </>
  )
}

export default About