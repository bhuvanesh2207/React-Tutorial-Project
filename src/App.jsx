import { Route, Routes } from "react-router-dom"
import './style.css'
import ScrollToTop from "./ScrollToTop";

import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Java from "./components/Java.jsx"
import Python from "./components/Python.jsx"
import Sql from "./components/Sql.jsx"

// Java Introduction
import Javaintro from "./components/Java/Java Introduction/Javaintro.jsx"
import Javafun from "./components/Java/Java Overview/JavaOverview.jsx"
import ProgEss from "./components/Java/Programming Essentials/ProgrammingEssentials.jsx"
import Oops from "./components/Java/Diving into Oops/Oops.jsx"
import DsAlg from "./components/Java/DataStructures and Algorithms/DatastrAlg.jsx"
import AdvJava from "./components/Java/Advance Java/AdvJava.jsx"

// Java Introduction Components
import FirstJavaCode from "./components/Java/Java Introduction/FirstJavaCode.jsx"
import JavaBasics from "./components/Java/Java Introduction/JavaBasics.jsx"
import JavaVariablesFeatures from "./components/Java/Java Introduction/JavaVariablesFeatures.jsx"
import OOP from "./components/Java/Java Introduction/OOP.jsx"
import DecodeDataStructures from "./components/Java/Java Introduction/DecodeDataStructures.jsx"

// Java Fundamentals Overview
import Operators from "./components/Java/Java Overview/Operators.jsx"
import DataCategories from "./components/Java/Java Overview/DataCategories.jsx"
import Methods from "./components/Java/Java Overview/Methods.jsx"
import UserInput from "./components/Java/Java Overview/UserInput.jsx"

// Programming Essentials
import ControlConstructs from "./components/Java/Programming Essentials/ControlConstructs.jsx"
import LoopingConstructs from "./components/Java/Programming Essentials/LoopingConstructs.jsx"
import JumpStatements from "./components/Java/Programming Essentials/JumpStatements.jsx"
import PatternPrograms from "./components/Java/Programming Essentials/PatternPrograms.jsx"
import NumberManipulation from "./components/Java/Programming Essentials/NumberManipulation.jsx"

// Object Oriented Programming
import Class from "./components/Java/Diving into Oops/Class.jsx"
import Objects from "./components/Java/Diving into Oops/Objects.jsx"
import DataAbstraction from "./components/Java/Diving into Oops/DataAbstraction.jsx"
import Encapsulation from "./components/Java/Diving into Oops/Encapsulation.jsx"
import Inheritance from "./components/Java/Diving into Oops/Inheritance.jsx"
import Polymorphism from "./components/Java/Diving into Oops/Polymorphism.jsx"

// Data Structures and Algorithms
import Arrays from "./components/Java/DataStructures and Algorithms/Arrays.jsx"
import AnatomyOfMain from "./components/Java/DataStructures and Algorithms/AnatomyOfMain.jsx"
import Strings from "./components/Java/DataStructures and Algorithms/Strings.jsx"
import Algorithms from "./components/Java/DataStructures and Algorithms/Algorithms.jsx"
import CollectionsFramework from "./components/Java/DataStructures and Algorithms/CollectionsFramework.jsx"

// Advance Java
import ExceptionHandling from "./components/Java/Advance Java/ExceptionHandling.jsx"
import ThreadsMultithreading from "./components/Java/Advance Java/ThreadsMultithreading.jsx"
import FileHandling from "./components/Java/Advance Java/FileHandling.jsx"
import Serialization from "./components/Java/Advance Java/Serialization.jsx"
import JavaAnnotations from "./components/Java/Advance Java/JavaAnnotations.jsx"

// Python Routes
import AdvancedPython_P from "./components/Python/Advanced Python/AdvancedPython_P.jsx"
import DataStructure_P from "./components/Python/Data Structure/DataStructure_P.jsx"
import DjangoFramework_P from "./components/Python/Django Framework/DjangoFramework_P.jsx"
import OOP_P from "./components/Python/OOP/OOP_P.jsx"
import PythonFundamentals from "./components/Python/Python Fundamentals/PythonFundamentals.jsx"

// Python Data structure
import Dictionaries from "./components/Python/Data Structure/Dictionaries.jsx"
import Lists from "./components/Python/Data Structure/Lists.jsx"
import Sets from "./components/Python/Data Structure/Sets.jsx"
import Tuples from "./components/Python/Data Structure/Tuples.jsx"

// Advance Python
import Decorators_P from "./components/Python/Advanced Python/Decorators_P.jsx"
import ExceptionHandling_P from "./components/Python/Advanced Python/ExceptionHandling_P.jsx"

// Django Framework
import DjangoIntro_P from "./components/Python/Django Framework/DjangoIntro_P.jsx"
import DjangoViews_P from "./components/Python/Django Framework/DjangoViews_P.jsx"

// Oops
import OOPIntro_P from "./components/Python/OOP/OOPIntro_P.jsx"
import Abstraction_P from "./components/Python/OOP/Abstraction_P.jsx"
import Encapsulation_P from "./components/Python/OOP/Encapsulation_P.jsx"
import Inheritance_P from "./components/Python/OOP/Inheritance_P.jsx"
import Polymorphism_P from "./components/Python/OOP/Polymorphism_P.jsx"

// Python Fundamentals
import Introduction from "./components/Python/Python Fundamentals/Introduction.jsx"
import GettingStarted from "./components/Python/Python Fundamentals/GettingStarted.jsx"
import Syntax from "./components/Python/Python Fundamentals/Syntax.jsx"
import PyUserInput from "./components/Python/Python Fundamentals/UserInput.jsx"
import PyOperators from "./components/Python/Python Fundamentals/Operators.jsx"
import PyControlConstructs from "./components/Python/Python Fundamentals/ControlConstructs.jsx"
import Functions from "./components/Python/Python Fundamentals/Functions.jsx"

//Sql
import DBMSAndSQLOverview from "./components/Sql/DataBase Essentials/DBMSAndSQLOverview.jsx";
import DatabaseIntegrityManagement from "./components/Sql/Database Integrity Management/DatabaseIntegrityManagement.jsx";
import CommandingSQL from"./components/Sql/SQL Commands/CommandingSQL.jsx";
import IntroductiontoSQLFunctions from "./components/Sql/SQL Functions/IntroductiontoSQLFunctions.jsx";
import OracleSQLFunctions from "./components/Sql/SQL in Oracle/OracleSQLFunctions.jsx";
import IntroductiontoOperators from "./components/Sql/SQL Operators/IntroductiontoOperators.jsx";
import StructuringDatawithSQL from "./components/Sql/Structuring Data with SQL/StructuringDatawithSQL.jsx";

//DataBase Essentials
import IntroductionToDatabases from "./components/Sql/DataBase Essentials/IntroductionToDatabases.jsx"; 
import SettingUptheStageforAction from "./components/Sql/DataBase Essentials/SettingUptheStageforAction.jsx"; 
import UnderstandingData from "./components/Sql/DataBase Essentials/UnderstandingData.jsx";

//Database Integrity Management
import DatabaseSchemaDesign from"./components/Sql/Database Integrity Management/DatabaseSchemaDesign.jsx";
import DataIntegrityEnhancement from"./components/Sql/Database Integrity Management/DataIntegrityEnhancement.jsx";
import DataRelationships from"./components/Sql/Database Integrity Management/DataRelationships.jsx";
import SQLAliases from"./components/Sql/Database Integrity Management/SQLAliases.jsx";
import SQLConstraints from"./components/Sql/Database Integrity Management/SQLConstraints.jsx";

//SQL Commands
import DataManipulationLanguage from"./components/Sql/SQL Commands/DataManipulationLanguage.jsx";
import MasteringDataDefinitionLanguage from"./components/Sql/SQL Commands/MasteringDataDefinitionLanguage.jsx";
import NavigatingDataControlLanguage from"./components/Sql/SQL Commands/NavigatingDataControlLanguage.jsx";
import TransactionControlLanguage from"./components/Sql/SQL Commands/TransactionControlLanguage.jsx";

//SQL Functions
import ContinuingOurJourneyWithSQLStringFunctions from "./components/Sql/SQL Functions/ContinuingOurJourneyWithSQLStringFunctions.jsx";
import ContinuingwithMySQLStringFunctions from "./components/Sql/SQL Functions/ContinuingwithMySQLStringFunctions.jsx";
import ControlFlowFunctionsInSQL from "./components/Sql/SQL Functions/ControlFlowFunctionsInSQL.jsx";
import DateAndTimeFunctionsInSQL from "./components/Sql/SQL Functions/DateAndTimeFunctionsInSQL.jsx";
import ExpandingOurKnowledgeOfSQLStringFunctions from "./components/Sql/SQL Functions/ExpandingOurKnowledgeOfSQLStringFunctions.jsx";
import FurtherMasteryOfStringFunctionsInSQL from "./components/Sql/SQL Functions/FurtherMasteryOfStringFunctionsInSQL.jsx";
import MasteringConcat from "./components/Sql/SQL Functions/MasteringConcat.jsx";
import MasteringNumberFunctionsInSQL from "./components/Sql/SQL Functions/MasteringNumberFunctionsInSQL.jsx";
import MultiRowFunctionsInSQL from "./components/Sql/SQL Functions/MultiRowFunctionsInSQL.jsx";

//SQL in Oracle
import ControlFlowandConversionFunctionsinOracle from "./components/Sql/SQL in Oracle/ControlFlowandConversionFunctionsinOracle.jsx";
import SQLinOracle from "./components/Sql/SQL in Oracle/SQLinOracle.jsx";
import TheDualTableinOracle from "./components/Sql/SQL in Oracle/TheDualTableinOracle.jsx";

//SQL Operators
import BetweenAndOperator from "./components/Sql/SQL Operators/BetweenAndOperator.jsx";
import BeyondSymbolicOperators from "./components/Sql/SQL Operators/BeyondSymbolicOperators.jsx";
import DataRetrievalinSQLUsingLimitandOffset from "./components/Sql/SQL Operators/DataRetrievalinSQLUsingLimitandOffset.jsx";
import DISTINCTandUNIQUEKeywordsinSQL from "./components/Sql/SQL Operators/DISTINCTandUNIQUEKeywordsinSQL.jsx";
import ExploringSQLsLIKEandNOTLIKEOperators from "./components/Sql/SQL Operators/ExploringSQL'sLIKEandNOTLIKEOperators.jsx";
import ExploringtheSQLINKeywordOperator from "./components/Sql/SQL Operators/ExploringtheSQLINKeywordOperator.jsx";
import ISNULLandISNOTNULLOperatorsinSQL from "./components/Sql/SQL Operators/ISNULLandISNOTNULLOperatorsinSQL.jsx";
import RelationalOperators from "./components/Sql/SQL Operators/RelationalOperators.jsx";

//Structuring Data with SQL
import AdvancedSQLQueriesUsingAllSelectClauses from "./components/Sql/Structuring Data with SQL/AdvancedSQLQueriesUsingAllSelectClauses.jsx";
import CommonTableExpressionsInSQL from "./components/Sql/Structuring Data with SQL/CommonTableExpressionsInSQL.jsx";
import GroupByClause from "./components/Sql/Structuring Data with SQL/GroupByClause.jsx";
import MasteringSQLJoins from "./components/Sql/Structuring Data with SQL/MasteringSQLJoins.jsx";
import MasteringSubqueriesInSQL from "./components/Sql/Structuring Data with SQL/MasteringSubqueriesInSQL.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/java" element={<Java/>}/>
        <Route path="/python" element={<Python/>}/>
        <Route path="/sql" element={<Sql/>}/>

        {/* Java Routes */}
        <Route path="/JavaIntro" element={<Javaintro/>}/>
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
        <Route path="/python/advanced" element={<AdvancedPython_P />} />
        <Route path="/python/data-structure" element={<DataStructure_P />} />
        <Route path="/python/django-framework" element={<DjangoFramework_P />} />
        <Route path="/python/oop" element={<OOP_P />} />
        <Route path="/PythonFundamentals" element={<PythonFundamentals />} />

        {/* Python Data structure */}
        <Route path="/Dictionaries" element={<Dictionaries />} />
        <Route path="/Lists" element={<Lists />} />
        <Route path="/Sets" element={<Sets />} />
        <Route path="/Tuples" element={<Tuples />} />

        {/* Advance Python */}
        <Route path="/Decorators_P" element={<Decorators_P />} />
        <Route path="/ExceptionHandling_P" element={<ExceptionHandling_P />} />

        {/* Django Framework */}
        <Route path="/DjangoIntro_P" element={<DjangoIntro_P />} />
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

        {/* Sql */}
        <Route path="/DBMSAndSQLOverview" element={<DBMSAndSQLOverview/>} />
        <Route path="/DatabaseIntegrityManagement" element={<DatabaseIntegrityManagement/>} />
        <Route path="/CommandingSQL" element={<CommandingSQL/>} />
        <Route path="/IntroductiontoSQLFunctions" element={<IntroductiontoSQLFunctions />} />
        <Route path="/OracleSQLFunctions" element={<OracleSQLFunctions />} />
        <Route path="/IntroductiontoOperators" element={<IntroductiontoOperators />} />
        <Route path="/StructuringDatawithSQL" element={<StructuringDatawithSQL />} />


        {/* DataBase Essentials */}
        <Route path="/IntroductionToDatabases" element={<IntroductionToDatabases/>} />
        <Route path="/SettingUptheStageforAction" element={<SettingUptheStageforAction/>} />
        <Route path="/UnderstandingData" element={<UnderstandingData/>} />

        {/* Database Integrity Management */}
        <Route path="/DatabaseSchemaDesign" element={<DatabaseSchemaDesign/>}/>
        <Route path="/DataIntegrityEnhancement" element={<DataIntegrityEnhancement/>}/>
        <Route path="/DataRelationships" element={<DataRelationships/>}/>
        <Route path="/SQLAliases" element={<SQLAliases/>}/>
        <Route path="/SQLConstraints" element={<SQLConstraints/>}/>

        {/* SQL commands */}
        <Route path="/DataManipulationLanguage" element={<DataManipulationLanguage/>}/>
        <Route path="/MasteringDataDefinitionLanguage" element={<MasteringDataDefinitionLanguage/>}/>
        <Route path="/NavigatingDataControlLanguage" element={<NavigatingDataControlLanguage/>}/>
        <Route path="/TransactionControlLanguage" element={<TransactionControlLanguage/>}/>

        {/* SQL Functions */}
      
        <Route path="/ContinuingOurJourneyWithSQLStringFunctions" element={<ContinuingOurJourneyWithSQLStringFunctions />} />
        <Route path="/ContinuingwithMySQLStringFunctions" element={<ContinuingwithMySQLStringFunctions />} />
        <Route path="/ControlFlowFunctionsInSQL" element={<ControlFlowFunctionsInSQL />} />
        <Route path="/DateAndTimeFunctionsInSQL" element={<DateAndTimeFunctionsInSQL />} />
        <Route path="/ExpandingOurKnowledgeOfSQLStringFunctions" element={<ExpandingOurKnowledgeOfSQLStringFunctions />} />
        <Route path="/FurtherMasteryOfStringFunctionsInSQL" element={<FurtherMasteryOfStringFunctionsInSQL />} />
        <Route path="/MasteringConcat" element={<MasteringConcat />} />
        <Route path="/MasteringNumberFunctionsInSQL" element={<MasteringNumberFunctionsInSQL />} />
        <Route path="/MultiRowFunctionsInSQL" element={<MultiRowFunctionsInSQL />} />

        {/* SQL in Oracle */}
        <Route path="/ControlFlowandConversionFunctionsinOracle" element={<ControlFlowandConversionFunctionsinOracle />} />
        <Route path="/SQLinOracle" element={<SQLinOracle />} />
        <Route path="/TheDualTableinOracle" element={<TheDualTableinOracle />} />

        {/* SQl Operators */}
        <Route path="/BetweenAndOperator" element={<BetweenAndOperator />} />
        <Route path="/BeyondSymbolicOperators" element={<BeyondSymbolicOperators />} />
        <Route path="/DataRetrievalinSQLUsingLimitandOffset" element={<DataRetrievalinSQLUsingLimitandOffset />} />
        <Route path="/DISTINCTandUNIQUEKeywordsinSQL" element={<DISTINCTandUNIQUEKeywordsinSQL />} />
        <Route path="/ExploringSQLsLIKEandNOTLIKEOperators" element={<ExploringSQLsLIKEandNOTLIKEOperators />} />
        <Route path="/ExploringtheSQLINKeywordOperator" element={<ExploringtheSQLINKeywordOperator />} />
        <Route path="/ISNULLandISNOTNULLOperatorsinSQL" element={<ISNULLandISNOTNULLOperatorsinSQL />} />
        <Route path="/RelationalOperators" element={<RelationalOperators />} />

        {/*Structuring Data with SQL */}
        <Route path="/AdvancedSQLQueriesUsingAllSelectClauses" element={<AdvancedSQLQueriesUsingAllSelectClauses />} />
        <Route path="/CommonTableExpressionsInSQL" element={<CommonTableExpressionsInSQL />} />
        <Route path="/GroupByClause" element={<GroupByClause />} />
        <Route path="/MasteringSQLJoins" element={<MasteringSQLJoins />} />
        <Route path="/MasteringSubqueriesInSQL" element={<MasteringSubqueriesInSQL />} />
      </Routes>
    </>
  )
}
export default App
