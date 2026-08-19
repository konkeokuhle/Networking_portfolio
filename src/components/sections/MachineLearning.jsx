const learningAreas = [
  {
    title: "Machine Learning Fundamentals",
    description:
      "Learning the core concepts behind machine learning, including datasets, features, labels, training, testing, and model development.",
    topics: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Training & Testing",
    ],
  },

  {
    title: "Machine Learning Algorithms",
    description:
      "Studying common machine learning algorithms and understanding when different approaches are appropriate.",
    topics: [
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "K-Nearest Neighbors",
      "SVM",
    ],
  },

  {
    title: "Data Preparation",
    description:
      "Developing practical skills for preparing datasets before training machine learning models.",
    topics: [
      "Data Cleaning",
      "Missing Data",
      "Feature Scaling",
      "Feature Engineering",
    ],
  },

  {
    title: "Model Evaluation",
    description:
      "Learning how to evaluate machine learning models and understand whether a model performs effectively on unseen data.",
    topics: [
      "Accuracy",
      "Precision",
      "Recall",
      "F1 Score",
      "Confusion Matrix",
    ],
  },
];

function MachineLearning() {
  return (
    <section
      id="machine-learning"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}

        <div className="mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-[4px] uppercase">
            Artificial Intelligence
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Machine Learning & AI
          </h2>

          <p className="text-slate-400 max-w-3xl mt-5 leading-7">
            Currently developing my understanding of machine learning through
            structured study, practical exercises, and hands-on projects.
          </p>
        </div>

        {/* Learning Status */}

        <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-7 mb-10">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-blue-400 text-sm uppercase tracking-widest">
                Current Focus
              </p>

              <h3 className="text-2xl font-bold mt-2">
                Building My Machine Learning Foundation
              </h3>
            </div>

            <span className="hidden sm:block text-sm text-yellow-400">
              ● Learning
            </span>

          </div>

          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            My current focus is understanding machine learning concepts,
            algorithms, data preparation, and model evaluation before moving
            into larger real-world projects.
          </p>

        </div>

        {/* Learning Areas */}

        <div className="grid md:grid-cols-2 gap-6">

          {learningAreas.map((area) => (
            <div
              key={area.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-7 hover:border-blue-500 transition"
            >

              <div className="flex items-center justify-between">

                <span className="w-3 h-3 rounded-full bg-blue-500"></span>

                <span className="text-xs uppercase tracking-wider text-yellow-400">
                  Learning
                </span>

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {area.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {area.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300"
                  >
                    {topic}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Future Projects */}

        <div className="mt-10 bg-black border border-slate-800 rounded-xl p-7">

          <p className="text-blue-400 text-sm uppercase tracking-widest">
            Next Stage
          </p>

          <h3 className="text-2xl font-bold mt-3">
            Machine Learning Projects
          </h3>

          <p className="text-slate-400 mt-4 max-w-3xl leading-7">
            As I progress through my ML learning journey, this section will
            showcase practical projects, datasets, algorithms used, and model
            results.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Python
            </span>

            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              NumPy
            </span>

            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Pandas
            </span>

            <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              Scikit-learn
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MachineLearning;