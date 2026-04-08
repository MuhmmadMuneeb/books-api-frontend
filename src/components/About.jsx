import React from "react";

const About = () => {
    return (
        <section className="px-6 py-16 bg-slate-900 min-h-screen text-slate-100">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-100 mb-4">
                    About <span className="text-amber-500">Our Bookstore</span>
                </h2>
                <p className="text-slate-400 mb-6">
                    Welcome to our bookstore! We are passionate about books and committed to providing you
                    with a curated selection of titles to fuel your mind and imagination. From bestsellers to
                    hidden gems, our collection is hand-picked for readers of all ages.
                </p>
                <p className="text-slate-400 mb-6">
                    Our mission is to make reading accessible and enjoyable. Whether you're looking for
                    personal growth, fiction adventures, or academic resources, we strive to create an
                    exceptional shopping experience with dark-themed visuals and amber highlights for a
                    modern touch.
                </p>
                <p className="text-amber-500 font-semibold">
                    Join us and explore the joy of reading!
                </p>
            </div>
        </section>
    );
};

export default About;