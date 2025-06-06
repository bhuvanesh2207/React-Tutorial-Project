import { Route, Routes } from "react-router-dom";
import './style.css';
import ScrollToTop from "./ScrollToTop";

import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Java from "./components/Java.jsx";
import Python from "./components/Python.jsx";
import Sql from "./components/Sql.jsx";

// Java Introduction
import Javaintro from "./components/Java/Java Introduction/Javaintro.jsx";
import Javafun from "./components/Java/Java Overview/JavaOverview.jsx";
import ProgEss from "./components/Java/Programming Essentials/ProgrammingEssentials.jsx";
import Oops from "./components/Java/Diving into Oops/Oops.jsx";
import DsAlg from "./components/Java/DataStructures and Algorithms/DatastrAlg.jsx";
import AdvJava from "./components/Java/Advance Java/AdvJava.jsx";

// Java Introduction Components
import FirstJavaCode from "./components/Java/Java Introduction/FirstJavaCode.jsx";
import JavaBasics from "./components/Java/Java Introduction/JavaBasics.jsx";
import JavaVariablesFeatures from "./components/Java/Java Introduction/JavaVariablesFeatures.jsx";
import OOP from "./components/Java/Java Introduction/OOP.jsx";
import DecodeDataStructures from "./components/Java/Java Introduction/DecodeDataStructures.jsx";

// Java Fundamentals Overview
import Operators from "./components/Java/Java Overview/Operators.jsx";
import DataCategories from "./components/Java/Java Overview/DataCategories.jsx";
import Methods from "./components/Java/Java Overview/Methods.jsx";
import UserInput from "./components/Java/Java Overview/UserInput.jsx";

// Programming Essentials
import ControlConstructs from "./components/Java/Programming Essentials/ControlConstructs.jsx";
import LoopingConstructs from "./components/Java/Programming Essentials/LoopingConstructs.jsx";
import JumpStatements from "./components/Java/Programming Essentials/JumpStatements.jsx";
import PatternPrograms from "./components/Java/Programming Essentials/PatternPrograms.jsx";
import NumberManipulation from "./components/Java/Programming Essentials/NumberManipulation.jsx";

// Object Oriented Programming
import Class from "./components/Java/Diving into Oops/Class.jsx";
import Objects from "./components/Java/Diving into Oops/Objects.jsx";
import DataAbstraction from "./components/Java/Diving into Oops/DataAbstraction.jsx";
import Encapsulation from "./components/Java/Diving into Oops/Encapsulation.jsx";
import Inheritance from "./components/Java/Diving into Oops/Inheritance.jsx";
import Polymorphism from "./components/Java/Diving into Oops/Polymorphism.jsx";

// Data Structures and Algorithms
import Arrays from "./components/Java/DataStructures and Algorithms/Arrays.jsx";
import AnatomyOfMain from "./components/Java/DataStructures and Algorithms/AnatomyOfMain.jsx";
import Strings from "./components/Java/DataStructures and Algorithms/Strings.jsx";
import Algorithms from "./components/Java/DataStructures and Algorithms/Algorithms.jsx";
import CollectionsFramework from "./components/Java/DataStructures and Algorithms/CollectionsFramework.jsx";

// Advance Java
import ExceptionHandling from "./components/Java/Advance Java/ExceptionHandling.jsx";
import ThreadsMultithreading from "./components/Java/Advance Java/ThreadsMultithreading.jsx";
import FileHandling from "./components/Java/Advance Java/FileHandling.jsx";
import Serialization from "./components/Java/Advance Java/Serialization.jsx";
import JavaAnnotations from "./components/Java/Advance Java/JavaAnnotations.jsx";

//python
import AdvancedPython from "./components/Python/Advanced Python/index.jsx";
import DataStructure from "./components/Python/Data Structure/index.jsx";
import DjangoFramework from "./components/Python/Django Framework/index.jsx";
import PythonOOP from "./components/Python/OOP/index.jsx";
import PythonFundamentals from "./components/Python/Python Fundamentals/index.jsx";

// Python Data structure
import Dictionaries from "./components/Python/Data Structure/Dictionaries.jsx";
import Lists from "./components/Python/Data Structure/Lists.jsx";
import Sets from "./components/Python/Data Structure/Sets.jsx";
import Tuples from "./components/Python/Data Structure/Tuples.jsx";

// Advance Python
import Decorators_P from "./components/Python/Advanced Python/Decorators_P.jsx";
import ExceptionHandling_P from "./components/Python/Advanced Python/ExceptionHandling_P.jsx";

// Django Framework
import DjangoIntro_P from "./components/Python/Django Framework/DjangoIntro_P.jsx";
import DjangoModels_P from "./components/Python/Django Framework/DjangoModels_P.jsx";
import DjangoViews_P from "./components/Python/Django Framework/DjangoViews_P.jsx";

// OOPs
import OOPIntro_P from "./components/Python/OOP/OOPIntro_P.jsx";
import Abstraction_P from "./components/Python/OOP/Abstraction_P.jsx";
import Encapsulation_P from "./components/Python/OOP/Encapsulation_P.jsx";
import Inheritance_P from "./components/Python/OOP/Inheritance_P.jsx";
import Polymorphism_P from "./components/Python/OOP/Polymorphism_P.jsx";

// Python Fundamentals
import Introduction from "./components/Python/Python Fundamentals/Introduction.jsx";
import GettingStarted from "./components/Python/Python Fundamentals/GettingStarted.jsx";
import Syntax from "./components/Python/Python Fundamentals/Syntax.jsx";
import PyUserInput from "./components/Python/Python Fundamentals/UserInput.jsx"; // renamed to avoid conflict
import PyOperators from "./components/Python/Python Fundamentals/Operators.jsx"; // renamed to avoid conflict
import PyControlConstructs from "./components/Python/Python Fundamentals/ControlConstructs.jsx"; // renamed
import Functions from "./components/Python/Python Fundamentals/Functions.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java" element={<Java />} />
        <Route path="/python" element={<Python />} />
        <Route path="/sql" element={<Sql />} />

        {/* Java Routes */}
        <Route path="/JavaIntro" element={<Javaintro />} />
        <Route path="/JavaOverview" element={<Javafun />} />
        <Route path="/ProgrammingEssentials" element={<ProgEss />} />
        <Route path="/Oops" element={<Oops />} />
        <Route path="/DatastrAlg" element={<DsAlg />} />
        <Route path="/AdvJava" element={<AdvJava />} />

        {/* Java Introduction Routes */}
        <Route path="/FirstJavaCode" element={<FirstJavaCode />} />
        <Route path="/JavaBasics" element={<JavaBasics />} />
        <Route path="/JavaVariablesFeatures" element={<JavaVariablesFeatures />} />
        <Route path="/OOP" element={<OOP />} />
        <Route path="/DecodeDataStructures" element={<DecodeDataStructures />} />

        {/* Java Fundamentals Overview Routes */}
        <Route path="/Operators" element={<Operators />} />
        <Route path="/DataCategories" element={<DataCategories />} />
        <Route path="/Methods" element={<Methods />} />
        <Route path="/UserInput" element={<UserInput />} />

        {/* Programming Essentials Routes */}
        <Route path="/ControlConstructs" element={<ControlConstructs />} />
        <Route path="/LoopingConstructs" element={<LoopingConstructs />} />
        <Route path="/JumpStatements" element={<JumpStatements />} />
        <Route path="/PatternPrograms" element={<PatternPrograms />} />
        <Route path="/NumberManipulation" element={<NumberManipulation />} />

        {/* Object Oriented Programming Routes */}
        <Route path="/Class" element={<Class />} />
        <Route path="/Objects" element={<Objects />} />
        <Route path="/DataAbstraction" element={<DataAbstraction />} />
        <Route path="/Encapsulation" element={<Encapsulation />} />
        <Route path="/Inheritance" element={<Inheritance />} />
        <Route path="/Polymorphism" element={<Polymorphism />} />

        {/* Data Structures and Algorithms Routes */}
        <Route path="/Arrays" element={<Arrays />} />
        <Route path="/AnatomyOfMain" element={<AnatomyOfMain />} />
        <Route path="/Strings" element={<Strings />} />
        <Route path="/Algorithms" element={<Algorithms />} />
        <Route path="/CollectionsFramework" element={<CollectionsFramework />} />

        {/* Advance Java Routes */}
        <Route path="/ExceptionHandling" element={<ExceptionHandling />} />
        <Route path="/ThreadsMultithreading" element={<ThreadsMultithreading />} />
        <Route path="/FileHandling" element={<FileHandling />} />
        <Route path="/Serialization" element={<Serialization />} />
        <Route path="/JavaAnnotations" element={<JavaAnnotations />} />

        {/* Python Routes */}
        <Route path="/AdvancedPython" element={<AdvancedPython />} />
        <Route path="/DataStructure" element={<DataStructure />} />
        <Route path="/DjangoFramework" element={<DjangoFramework />} />
        <Route path="/OOP" element={<PythonOOP />} />
        <Route path="/PythonFundamentals" element={<PythonFundamentals />} />

        {/* Data structure */}
        <Route path="/Dictionaries" element={<Dictionaries />} />
        <Route path="/Lists" element={<Lists />} />
        <Route path="/Sets" element={<Sets />} />
        <Route path="/Tuples" element={<Tuples />} />

        {/* Advance Python */}
        <Route path="/Decorators_P" element={<Decorators_P />} />
        <Route path="/ExceptionHandling_P" element={<ExceptionHandling_P />} />

        {/* Django Framework */}
        <Route path="/DjangoIntro_P" element={<DjangoIntro_P />} />
        <Route path="/DjangoModels_P" element={<DjangoModels_P />} />
        <Route path="/DjangoViews_P" element={<DjangoViews_P />} />

        {/* Oops */}
        <Route path="/OOPIntro_P" element={<OOPIntro_P />} />
        <Route path="/Abstraction_P" element={<Abstraction_P />} />
        <Route path="/Encapsulation_P" element={<Encapsulation_P />} />
        <Route path="/Inheritance_P" element={<Inheritance_P />} />
        <Route path="/Polymorphism_P" element={<Polymorphism_P />} />

        {/* Python Fundamentals */}
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/GettingStarted" element={<GettingStarted />} />
        <Route path="/Syntax" element={<Syntax />} />
        <Route path="/UserInput" element={<PyUserInput />} />
        <Route path="/Operators" element={<PyOperators />} />
        <Route path="/ControlConstructs" element={<PyControlConstructs />} />
        <Route path="/Functions" element={<Functions />} />
      </Routes>
      </>
  )}
export default App;
