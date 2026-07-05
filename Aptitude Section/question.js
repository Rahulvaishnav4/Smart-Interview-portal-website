const questionData = {
qa: [
  {
    question: "What is Percentage?",
    difficulty: "Easy",
    answer:
      "Percentage is a number or ratio expressed as a fraction of 100. Formula: (Value / Total Value) × 100.",
  },

  {
    question: "What is Profit and Loss?",
    difficulty: "Easy",
    answer:
      "Profit occurs when Selling Price (SP) is greater than Cost Price (CP), while Loss occurs when SP is less than CP.",
  },

  {
    question: "Formula for Profit Percentage?",
    difficulty: "Easy",
    answer:
      "Profit % = (Profit / Cost Price) × 100.",
  },

  {
    question: "Formula for Loss Percentage?",
    difficulty: "Easy",
    answer:
      "Loss % = (Loss / Cost Price) × 100.",
  },

  {
    question: "What is Simple Interest?",
    difficulty: "Easy",
    answer:
      "Simple Interest is calculated only on the principal amount. SI = (P × R × T) / 100.",
  },

  {
    question: "What is Compound Interest?",
    difficulty: "Medium",
    answer:
      "Compound Interest is calculated on both the principal and accumulated interest. CI = Amount − Principal.",
  },

  {
    question: "Difference between Simple Interest and Compound Interest?",
    difficulty: "Medium",
    answer:
      "Simple Interest is calculated only on the principal, whereas Compound Interest is calculated on the principal as well as accumulated interest.",
  },

  {
    question: "What is Ratio?",
    difficulty: "Easy",
    answer:
      "A Ratio compares two quantities of the same kind using division.",
  },

  {
    question: "What is Proportion?",
    difficulty: "Easy",
    answer:
      "A Proportion states that two ratios are equal.",
  },

  {
    question: "What is Average?",
    difficulty: "Easy",
    answer:
      "Average = Sum of all observations / Number of observations.",
  },

  {
    question: "What is Time and Work?",
    difficulty: "Medium",
    answer:
      "Time and Work problems are based on the amount of work completed by one or more persons in a given time.",
  },

  {
    question: "What is Time, Speed and Distance?",
    difficulty: "Easy",
    answer:
      "The relation between time, speed and distance is Distance = Speed × Time.",
  },

  {
    question: "What is Boat and Stream?",
    difficulty: "Medium",
    answer:
      "Boat and Stream problems involve upstream and downstream speeds. Downstream = Boat Speed + Stream Speed, Upstream = Boat Speed − Stream Speed.",
  },

  {
    question: "What is Partnership?",
    difficulty: "Medium",
    answer:
      "Partnership problems involve sharing profit based on investment and investment duration.",
  },

  {
    question: "What is Mixture and Alligation?",
    difficulty: "Medium",
    answer:
      "Mixture and Alligation is a method used to find the ratio in which two or more ingredients are mixed.",
  },

  {
    question: "What is Permutation?",
    difficulty: "Hard",
    answer:
      "Permutation is the arrangement of objects where order matters. Formula: nPr = n! / (n − r)!",
  },

  {
    question: "What is Combination?",
    difficulty: "Hard",
    answer:
      "Combination is the selection of objects where order does not matter. Formula: nCr = n! / [r!(n − r)!].",
  },

  {
    question: "Difference between Permutation and Combination?",
    difficulty: "Medium",
    answer:
      "Permutation considers the order of arrangement, whereas Combination does not consider the order.",
  },

  {
    question: "What is Probability?",
    difficulty: "Medium",
    answer:
      "Probability is the likelihood of an event occurring. Probability = Favorable Outcomes / Total Outcomes.",
  },

  {
    question: "What is Number System?",
    difficulty: "Easy",
    answer:
      "The Number System includes natural numbers, whole numbers, integers, rational numbers, irrational numbers and real numbers.",
  },

  {
    question: "What are HCF and LCM?",
    difficulty: "Easy",
    answer:
      "HCF (Highest Common Factor) is the greatest common divisor of numbers, while LCM (Least Common Multiple) is the smallest common multiple.",
  },

  {
    question: "What is Simplification?",
    difficulty: "Easy",
    answer:
      "Simplification involves evaluating mathematical expressions using the BODMAS/BODMAS rule.",
  },

  {
    question: "What is Quadratic Equation?",
    difficulty: "Medium",
    answer:
      "A quadratic equation is of the form ax² + bx + c = 0, where a ≠ 0.",
  },

  {
    question: "What is Algebra?",
    difficulty: "Medium",
    answer:
      "Algebra deals with mathematical expressions involving variables, constants and operations.",
  },

  {
    question: "What is Percentage Increase and Decrease?",
    difficulty: "Medium",
    answer:
      "Percentage Increase = (Increase / Original Value) × 100. Percentage Decrease = (Decrease / Original Value) × 100.",
  },

  {
    question: "What is Mensuration?",
    difficulty: "Hard",
    answer:
      "Mensuration deals with the measurement of area, perimeter, surface area and volume of geometric figures.",
  },

  {
    question: "What is Data Interpretation?",
    difficulty: "Hard",
    answer:
      "Data Interpretation involves analyzing data presented in tables, graphs, charts and diagrams to answer questions.",
  },

  {
    question: "What is Decimal and Fraction?",
    difficulty: "Easy",
    answer:
      "A decimal represents a part of a whole using a decimal point, whereas a fraction represents a part of a whole using numerator and denominator.",
  },

  {
    question: "What is Age Problem?",
    difficulty: "Medium",
    answer:
      "Age problems involve finding present, past or future ages using equations based on given conditions.",
  },

  {
    question: "What is Pipes and Cistern?",
    difficulty: "Medium",
    answer:
      "Pipes and Cistern problems calculate the time taken to fill or empty a tank based on the rates of different pipes.",
  },
],

lr: [
  {
    question: "What is Logical Reasoning?",
    difficulty: "Easy",
    answer:
      "Logical Reasoning is the ability to analyze information, identify patterns, and solve problems using logical thinking.",
  },

  {
    question: "What is Analogy?",
    difficulty: "Easy",
    answer:
      "Analogy is a reasoning technique where the relationship between one pair of words or numbers is used to find the relationship in another pair.",
  },

  {
    question: "What is Classification (Odd One Out)?",
    difficulty: "Easy",
    answer:
      "Classification involves identifying the item that does not belong to the given group based on a common property.",
  },

  {
    question: "What is Series?",
    difficulty: "Easy",
    answer:
      "Series questions require finding the missing or next term in a sequence by identifying a logical pattern.",
  },

  {
    question: "What is Number Series?",
    difficulty: "Easy",
    answer:
      "A Number Series consists of numbers arranged according to a specific mathematical or logical pattern.",
  },

  {
    question: "What is Alphabet Series?",
    difficulty: "Easy",
    answer:
      "Alphabet Series involves letters arranged in a pattern where the next or missing letter must be identified.",
  },

  {
    question: "What is Coding-Decoding?",
    difficulty: "Medium",
    answer:
      "Coding-Decoding involves identifying the rule used to convert words, letters, or numbers into coded forms and applying it.",
  },

  {
    question: "What is Blood Relation?",
    difficulty: "Medium",
    answer:
      "Blood Relation problems determine relationships between family members using the given information.",
  },

  {
    question: "What is Direction Sense?",
    difficulty: "Medium",
    answer:
      "Direction Sense questions involve determining the final direction or position after a sequence of movements.",
  },

  {
    question: "What is Ranking and Order?",
    difficulty: "Medium",
    answer:
      "Ranking and Order problems determine the position of a person or object from the top, bottom, left, or right.",
  },

  {
    question: "What is Seating Arrangement?",
    difficulty: "Medium",
    answer:
      "Seating Arrangement problems require arranging people according to given conditions and answering related questions.",
  },

  {
    question: "What is Puzzle?",
    difficulty: "Hard",
    answer:
      "Puzzle questions involve solving multiple interconnected conditions to determine the correct arrangement or solution.",
  },

  {
    question: "What is Syllogism?",
    difficulty: "Hard",
    answer:
      "Syllogism is a logical reasoning topic where conclusions are drawn from given statements using deductive reasoning.",
  },

  {
    question: "What is Statement and Conclusion?",
    difficulty: "Medium",
    answer:
      "These questions require deciding whether the given conclusion logically follows from the provided statement.",
  },

  {
    question: "What is Statement and Assumption?",
    difficulty: "Hard",
    answer:
      "Statement and Assumption questions test whether an unstated assumption is implied by the given statement.",
  },

  {
    question: "What is Cause and Effect?",
    difficulty: "Medium",
    answer:
      "Cause and Effect questions identify whether one event is the reason for another event.",
  },

  {
    question: "What is Assertion and Reason?",
    difficulty: "Hard",
    answer:
      "Assertion and Reason questions determine whether the reason correctly explains the given assertion.",
  },

  {
    question: "What is Input-Output?",
    difficulty: "Hard",
    answer:
      "Input-Output questions require identifying the rule used to transform an input into an output through multiple steps.",
  },

  {
    question: "What is Clock Reasoning?",
    difficulty: "Medium",
    answer:
      "Clock Reasoning involves solving problems related to the angle, position, and movement of clock hands.",
  },

  {
    question: "What is Calendar Reasoning?",
    difficulty: "Medium",
    answer:
      "Calendar Reasoning involves determining days, dates, leap years, and related calendar calculations.",
  },

  {
    question: "What is Mirror Image?",
    difficulty: "Easy",
    answer:
      "Mirror Image questions require identifying how an object appears when viewed in a mirror.",
  },

  {
    question: "What is Water Image?",
    difficulty: "Easy",
    answer:
      "Water Image questions require identifying the reflection of an object in water.",
  },

  {
    question: "What is Paper Folding?",
    difficulty: "Medium",
    answer:
      "Paper Folding questions require predicting the appearance of a paper after folding and unfolding.",
  },

  {
    question: "What is Paper Cutting?",
    difficulty: "Medium",
    answer:
      "Paper Cutting questions require identifying the pattern formed after cutting a folded paper.",
  },

  {
    question: "What is Cube and Dice?",
    difficulty: "Hard",
    answer:
      "Cube and Dice questions involve analyzing faces, rotations, and opposite sides of cubes or dice.",
  },

  {
    question: "What is Embedded Figure?",
    difficulty: "Medium",
    answer:
      "Embedded Figure questions require identifying a hidden figure inside a larger complex figure.",
  },

  {
    question: "What is Figure Completion?",
    difficulty: "Easy",
    answer:
      "Figure Completion questions require selecting the missing part that completes the given figure.",
  },

  {
    question: "What is Non-Verbal Reasoning?",
    difficulty: "Medium",
    answer:
      "Non-Verbal Reasoning involves solving pattern-based problems using figures, shapes, and diagrams instead of words.",
  },

  {
    question: "What is Verbal Reasoning?",
    difficulty: "Easy",
    answer:
      "Verbal Reasoning involves solving logical problems using words, letters, statements, and language-based patterns.",
  },

  {
    question: "What is Decision Making?",
    difficulty: "Hard",
    answer:
      "Decision Making questions require choosing the most appropriate solution based on the given situation and logical analysis.",
  },
],

 vb: [
  {
    question: "What is Verbal Reasoning?",
    difficulty: "Easy",
    answer:
      "Verbal Reasoning is the ability to understand, analyze, and solve problems using words, language, and logical thinking.",
  },

  {
    question: "What is Analogy?",
    difficulty: "Easy",
    answer:
      "Analogy identifies the relationship between two words and applies the same relationship to another pair of words.",
  },

  {
    question: "What is Synonym?",
    difficulty: "Easy",
    answer:
      "A synonym is a word that has the same or nearly the same meaning as another word.",
  },

  {
    question: "What is Antonym?",
    difficulty: "Easy",
    answer:
      "An antonym is a word that has the opposite meaning of another word.",
  },

  {
    question: "What is Classification (Odd One Out)?",
    difficulty: "Easy",
    answer:
      "Classification requires identifying the word that does not belong to the given group.",
  },

  {
    question: "What is Coding-Decoding?",
    difficulty: "Medium",
    answer:
      "Coding-Decoding involves finding the rule used to encode words or letters and applying it to solve the problem.",
  },

  {
    question: "What is Alphabet Test?",
    difficulty: "Easy",
    answer:
      "Alphabet Test questions are based on the order and positions of letters in the English alphabet.",
  },

  {
    question: "What is Word Formation?",
    difficulty: "Easy",
    answer:
      "Word Formation involves creating meaningful words using the given letters.",
  },

  {
    question: "What is Sentence Completion?",
    difficulty: "Medium",
    answer:
      "Sentence Completion requires choosing the most suitable word or phrase to complete a sentence correctly.",
  },

  {
    question: "What is Sentence Arrangement?",
    difficulty: "Medium",
    answer:
      "Sentence Arrangement requires arranging given sentences into a logical and meaningful paragraph.",
  },

  {
    question: "What is Para Jumbles?",
    difficulty: "Medium",
    answer:
      "Para Jumbles involve arranging shuffled sentences into the correct sequence to form a coherent paragraph.",
  },

  {
    question: "What is Statement and Conclusion?",
    difficulty: "Medium",
    answer:
      "Statement and Conclusion questions require determining whether the given conclusion logically follows from the statement.",
  },

  {
    question: "What is Statement and Assumption?",
    difficulty: "Hard",
    answer:
      "Statement and Assumption questions test whether an unstated assumption is implied by the given statement.",
  },

  {
    question: "What is Statement and Argument?",
    difficulty: "Hard",
    answer:
      "Statement and Argument questions determine whether the given arguments are strong, weak, or logically valid.",
  },

  {
    question: "What is Assertion and Reason?",
    difficulty: "Hard",
    answer:
      "Assertion and Reason questions determine whether the reason correctly explains the given assertion.",
  },

  {
    question: "What is Cause and Effect?",
    difficulty: "Medium",
    answer:
      "Cause and Effect questions identify whether one event is the logical reason for another event.",
  },

  {
    question: "What is Syllogism?",
    difficulty: "Hard",
    answer:
      "Syllogism involves drawing logical conclusions from given statements using deductive reasoning.",
  },

  {
    question: "What is Logical Sequence of Words?",
    difficulty: "Easy",
    answer:
      "Logical Sequence of Words requires arranging words in a meaningful or chronological order.",
  },

  {
    question: "What is Reading Comprehension?",
    difficulty: "Medium",
    answer:
      "Reading Comprehension involves reading a passage carefully and answering questions based on it.",
  },

  {
    question: "What is Critical Reasoning?",
    difficulty: "Hard",
    answer:
      "Critical Reasoning evaluates arguments, assumptions, evidence, and conclusions to determine logical correctness.",
  },

  {
    question: "What is Vocabulary?",
    difficulty: "Easy",
    answer:
      "Vocabulary refers to the collection of words a person knows and understands.",
  },

  {
    question: "What is Idioms and Phrases?",
    difficulty: "Medium",
    answer:
      "Idioms and Phrases are groups of words whose meanings are different from their literal meanings.",
  },

  {
    question: "What is One Word Substitution?",
    difficulty: "Medium",
    answer:
      "One Word Substitution involves replacing a group of words with a single appropriate word.",
  },

  {
    question: "What is Error Detection?",
    difficulty: "Medium",
    answer:
      "Error Detection requires identifying grammatical or usage errors in a sentence.",
  },

  {
    question: "What is Fill in the Blanks?",
    difficulty: "Easy",
    answer:
      "Fill in the Blanks requires selecting the most suitable word or phrase to complete a sentence.",
  },

  {
    question: "What is Cloze Test?",
    difficulty: "Hard",
    answer:
      "A Cloze Test consists of a passage with missing words that must be filled using context and grammar.",
  },

  {
    question: "What is Word Rearrangement?",
    difficulty: "Medium",
    answer:
      "Word Rearrangement involves arranging given words in the correct order to form a meaningful sentence.",
  },

  {
    question: "What is Inference?",
    difficulty: "Hard",
    answer:
      "Inference questions require drawing logical conclusions from the information provided without making assumptions.",
  },

  {
    question: "What is Verbal Classification?",
    difficulty: "Easy",
    answer:
      "Verbal Classification groups words based on common characteristics and identifies the odd one out.",
  },

  {
    question: "What is Theme Detection?",
    difficulty: "Hard",
    answer:
      "Theme Detection identifies the central idea or main message of a given passage or paragraph.",
  },
],
 nvb: [
  {
    question: "What is Non-Verbal Reasoning?",
    difficulty: "Easy",
    answer:
      "Non-Verbal Reasoning is the ability to solve problems using figures, shapes, patterns, and diagrams instead of words.",
  },

  {
    question: "What is Figure Series?",
    difficulty: "Easy",
    answer:
      "Figure Series requires identifying the pattern in a sequence of figures and selecting the next or missing figure.",
  },

  {
    question: "What is Figure Analogy?",
    difficulty: "Easy",
    answer:
      "Figure Analogy identifies the relationship between one pair of figures and applies the same relationship to another pair.",
  },

  {
    question: "What is Figure Classification?",
    difficulty: "Easy",
    answer:
      "Figure Classification requires identifying the figure that does not belong to the given group.",
  },

  {
    question: "What is Mirror Image?",
    difficulty: "Easy",
    answer:
      "Mirror Image questions require identifying how a figure appears when viewed in a mirror.",
  },

  {
    question: "What is Water Image?",
    difficulty: "Easy",
    answer:
      "Water Image questions require identifying the reflection of a figure in water.",
  },

  {
    question: "What is Paper Folding?",
    difficulty: "Medium",
    answer:
      "Paper Folding involves predicting the appearance of a paper after folding and unfolding.",
  },

  {
    question: "What is Paper Cutting?",
    difficulty: "Medium",
    answer:
      "Paper Cutting requires identifying the pattern formed after cutting a folded paper and unfolding it.",
  },

  {
    question: "What is Embedded Figure?",
    difficulty: "Medium",
    answer:
      "Embedded Figure questions require finding a hidden figure inside a larger complex figure.",
  },

  {
    question: "What is Figure Completion?",
    difficulty: "Easy",
    answer:
      "Figure Completion requires selecting the missing part that correctly completes a figure.",
  },

  {
    question: "What is Image Completion?",
    difficulty: "Easy",
    answer:
      "Image Completion involves identifying the missing portion of an incomplete picture or shape.",
  },

  {
    question: "What is Cube and Dice?",
    difficulty: "Hard",
    answer:
      "Cube and Dice questions involve analyzing faces, rotations, opposite faces, and unfolded cube patterns.",
  },

  {
    question: "What is Cube Folding?",
    difficulty: "Hard",
    answer:
      "Cube Folding requires determining how a cube will appear after folding a given net.",
  },

  {
    question: "What is Dot Situation?",
    difficulty: "Medium",
    answer:
      "Dot Situation questions determine the position of dots after folding and unfolding a paper.",
  },

  {
    question: "What is Pattern Completion?",
    difficulty: "Medium",
    answer:
      "Pattern Completion requires selecting the figure that correctly completes a given pattern.",
  },

  {
    question: "What is Rule Detection?",
    difficulty: "Hard",
    answer:
      "Rule Detection involves identifying the logical rule governing a sequence of figures.",
  },

  {
    question: "What is Grouping of Identical Figures?",
    difficulty: "Medium",
    answer:
      "Grouping of Identical Figures requires identifying identical figures despite changes in orientation or rotation.",
  },

  {
    question: "What is Counting Figures?",
    difficulty: "Medium",
    answer:
      "Counting Figures involves determining the total number of specific shapes present in a complex diagram.",
  },

  {
    question: "What is Figure Matrix?",
    difficulty: "Hard",
    answer:
      "Figure Matrix questions require identifying the missing figure in a matrix based on row and column patterns.",
  },

  {
    question: "What is Image Analysis?",
    difficulty: "Hard",
    answer:
      "Image Analysis involves observing visual patterns and relationships to identify the correct answer.",
  },

  {
    question: "What is Rotation of Figures?",
    difficulty: "Medium",
    answer:
      "Rotation of Figures requires identifying how a figure looks after being rotated by a given angle.",
  },

  {
    question: "What is Reflection?",
    difficulty: "Medium",
    answer:
      "Reflection questions involve identifying the reflected image of a figure across a mirror line.",
  },

  {
    question: "What is Symmetry?",
    difficulty: "Easy",
    answer:
      "Symmetry refers to the balanced arrangement of a figure where one half mirrors the other.",
  },

  {
    question: "What is Shape Construction?",
    difficulty: "Medium",
    answer:
      "Shape Construction involves combining simple shapes to form a complex figure.",
  },

  {
    question: "What is Shape Decomposition?",
    difficulty: "Medium",
    answer:
      "Shape Decomposition requires breaking a complex figure into simpler component shapes.",
  },

  {
    question: "What is Visual Reasoning?",
    difficulty: "Easy",
    answer:
      "Visual Reasoning is the ability to understand and analyze information presented through images and diagrams.",
  },

  {
    question: "What is Spatial Reasoning?",
    difficulty: "Hard",
    answer:
      "Spatial Reasoning involves understanding the position, movement, and relationship of objects in space.",
  },

  {
    question: "What is Hidden Figure?",
    difficulty: "Medium",
    answer:
      "Hidden Figure questions require locating a small figure concealed within a larger figure.",
  },

  {
    question: "What is Figure Matching?",
    difficulty: "Easy",
    answer:
      "Figure Matching requires selecting the figure that exactly matches the given figure despite rotation or orientation changes.",
  },

  {
    question: "What is Non-Verbal Classification?",
    difficulty: "Easy",
    answer:
      "Non-Verbal Classification involves grouping figures based on common visual characteristics and identifying the odd one out.",
  },
],

  mt: [
  {
    question: "What is Percentage?",
    difficulty: "Easy",
    answer:
      "Percentage is a value expressed as a fraction of 100. Formula: (Value / Total Value) × 100.",
  },

  {
    question: "What is Average?",
    difficulty: "Easy",
    answer:
      "Average is the sum of all observations divided by the total number of observations.",
  },

  {
    question: "What is Profit and Loss?",
    difficulty: "Easy",
    answer:
      "Profit occurs when Selling Price is greater than Cost Price, while Loss occurs when Selling Price is less than Cost Price.",
  },

  {
    question: "What is Time and Work?",
    difficulty: "Medium",
    answer:
      "Time and Work problems deal with the amount of work completed by one or more persons in a given time.",
  },

  {
    question: "What is Probability?",
    difficulty: "Medium",
    answer:
      "Probability measures the chance of an event occurring. Probability = Favorable Outcomes / Total Outcomes.",
  },

  {
    question: "What is Analogy?",
    difficulty: "Easy"
    },
  ],
 pyq: [
  {
    question: "What is Percentage?",
    difficulty: "Easy",
    answer:
      "Percentage is a value expressed out of 100. Formula: (Value / Total) × 100.",
  },

  {
    question: "Difference between Simple Interest and Compound Interest?",
    difficulty: "Medium",
    answer:
      "Simple Interest is calculated only on the principal amount, whereas Compound Interest is calculated on the principal and accumulated interest.",
  },

  {
    question: "What is Profit and Loss?",
    difficulty: "Easy",
    answer:
      "Profit occurs when Selling Price is greater than Cost Price, while Loss occurs when Selling Price is less than Cost Price.",
  },

  {
    question: "What is Time, Speed and Distance?",
    difficulty: "Easy",
    answer:
      "Distance = Speed × Time. These three quantities are directly related.",
  },

  {
    question: "What is Time and Work?",
    difficulty: "Medium",
    answer:
      "Time and Work problems determine the time taken by one or more people to complete a task.",
  },

  {
    question: "What is Ratio and Proportion?",
    difficulty: "Easy",
    answer:
      "A Ratio compares two quantities, while a Proportion states that two ratios are equal.",
  },

  {
    question: "What is Average?",
    difficulty: "Easy",
    answer:
      "Average = Sum of observations / Number of observations.",
  },

  {
    question: "What is Probability?",
    difficulty: "Medium",
    answer:
      "Probability is the chance of an event occurring. Formula = Favorable Outcomes / Total Outcomes.",
  },

  {
    question: "What is Analogy?",
    difficulty: "Easy",
    answer:
      "Analogy identifies the relationship between two words, numbers, or figures and applies the same relationship to another pair.",
  },

  {
    question: "What is Coding-Decoding?",
    difficulty: "Medium",
    answer:
      "Coding-Decoding involves identifying the rule used to encode letters or words and applying it.",
  },

  {
    question: "What is Blood Relation?",
    difficulty: "Medium",
    answer:
      "Blood Relation questions determine family relationships using the given information.",
  },

  {
    question: "What is Direction Sense?",
    difficulty: "Medium",
    answer:
      "Direction Sense questions determine the final direction or position after a sequence of movements.",
  },

  {
    question: "What is Seating Arrangement?",
    difficulty: "Hard",
    answer:
      "Seating Arrangement requires arranging people according to given conditions and answering related questions.",
  },

  {
    question: "What is Puzzle?",
    difficulty: "Hard",
    answer:
      "Puzzle questions involve solving multiple conditions to determine the correct arrangement.",
  },

  {
    question: "What is Syllogism?",
    difficulty: "Hard",
    answer:
      "Syllogism involves drawing valid conclusions from the given statements using logical reasoning.",
  },

  {
    question: "What is Statement and Conclusion?",
    difficulty: "Medium",
    answer:
      "These questions require determining whether the conclusion logically follows from the statement.",
  },

  {
    question: "What is Reading Comprehension?",
    difficulty: "Medium",
    answer:
      "Reading Comprehension involves reading a passage and answering questions based on it.",
  },

  {
    question: "What is Synonym?",
    difficulty: "Easy",
    answer:
      "A synonym is a word that has the same or nearly the same meaning as another word.",
  },

  {
    question: "What is Antonym?",
    difficulty: "Easy",
    answer:
      "An antonym is a word that has the opposite meaning of another word.",
  },

  {
    question: "What is Error Detection?",
    difficulty: "Medium",
    answer:
      "Error Detection requires identifying grammatical or usage errors in a sentence.",
  },

  {
    question: "What is One Word Substitution?",
    difficulty: "Medium",
    answer:
      "One Word Substitution replaces a group of words with a single appropriate word.",
  },

  {
    question: "What is Cloze Test?",
    difficulty: "Hard",
    answer:
      "A Cloze Test consists of a passage with missing words that must be filled using grammar and context.",
  },

  {
    question: "What is Mirror Image?",
    difficulty: "Easy",
    answer:
      "Mirror Image questions require identifying how a figure appears in a mirror.",
  },

  {
    question: "What is Paper Folding?",
    difficulty: "Medium",
    answer:
      "Paper Folding requires predicting the appearance of a paper after folding and unfolding.",
  },

  {
    question: "What is Paper Cutting?",
    difficulty: "Medium",
    answer:
      "Paper Cutting involves identifying the pattern formed after cutting a folded paper.",
  },

  {
    question: "What is Cube and Dice?",
    difficulty: "Hard",
    answer:
      "Cube and Dice questions involve analyzing cube faces, rotations, and opposite sides.",
  },

  {
    question: "What is Embedded Figure?",
    difficulty: "Medium",
    answer:
      "Embedded Figure questions require identifying a hidden figure within a larger figure.",
  },

  {
    question: "What is Figure Series?",
    difficulty: "Easy",
    answer:
      "Figure Series requires identifying the pattern in a sequence of figures and selecting the next figure.",
  },

  {
    question: "What is Figure Analogy?",
    difficulty: "Medium",
    answer:
      "Figure Analogy identifies the relationship between one pair of figures and applies it to another pair.",
  },

  {
    question: "What is Number Series?",
    difficulty: "Easy",
    answer:
      "Number Series questions require finding the missing or next number by identifying a logical pattern.",
  },

  {
    question: "What is Alphabet Series?",
    difficulty: "Easy",
    answer:
      "Alphabet Series involves identifying patterns based on the positions of letters in the English alphabet.",
  },
],
}