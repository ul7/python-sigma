Search.setIndex({docnames:["api/modules","api/sigma","api/sigma.cli","api/sigma.cli.converter","api/sigma.cli.list","api/sigma.cli.mitre","api/sigma.cli.schema","api/sigma.cli.transform","api/sigma.cli.validate","api/sigma.errors","api/sigma.grammar","api/sigma.mitre","api/sigma.schema","api/sigma.serializer","api/sigma.serializer.elastic","api/sigma.transform","index","serializer-definition","serializers","transformations"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["api/modules.rst","api/sigma.rst","api/sigma.cli.rst","api/sigma.cli.converter.rst","api/sigma.cli.list.rst","api/sigma.cli.mitre.rst","api/sigma.cli.schema.rst","api/sigma.cli.transform.rst","api/sigma.cli.validate.rst","api/sigma.errors.rst","api/sigma.grammar.rst","api/sigma.mitre.rst","api/sigma.schema.rst","api/sigma.serializer.rst","api/sigma.serializer.elastic.rst","api/sigma.transform.rst","index.rst","serializer-definition.rst","serializers.rst","transformations.rst"],objects:{"":[[1,0,0,"-","sigma"]],"sigma.errors":[[9,1,1,"","ConditionSyntaxError"],[9,1,1,"","InvalidFieldValueError"],[9,1,1,"","InvalidModifierCombinationError"],[9,1,1,"","RuleValidationError"],[9,1,1,"","SerializerNotFound"],[9,1,1,"","SerializerValidationError"],[9,1,1,"","SigmaError"],[9,1,1,"","SigmaValidationError"],[9,1,1,"","TransformValidationError"],[9,1,1,"","UnknownIdentifierError"],[9,1,1,"","UnknownModifierError"],[9,1,1,"","UnknownTransform"],[9,1,1,"","UnsupportedSerializerFormat"]],"sigma.errors.ConditionSyntaxError":[[9,2,1,"","column"],[9,2,1,"","line"],[9,2,1,"","lineno"],[9,2,1,"","message"]],"sigma.grammar":[[10,3,1,"","Base64FieldEquality"],[10,3,1,"","CoreExpression"],[10,3,1,"","Expression"],[10,3,1,"","FieldComparison"],[10,3,1,"","FieldContains"],[10,3,1,"","FieldEndsWith"],[10,3,1,"","FieldEquality"],[10,3,1,"","FieldIn"],[10,3,1,"","FieldRegex"],[10,3,1,"","FieldStartsWith"],[10,3,1,"","Identifier"],[10,3,1,"","KeywordSearch"],[10,3,1,"","LogicalAnd"],[10,3,1,"","LogicalExpression"],[10,3,1,"","LogicalNot"],[10,3,1,"","LogicalOr"],[10,3,1,"","Selector"],[10,6,1,"","base64_modifier"],[10,6,1,"","base64offset_modifier"],[10,6,1,"","build_grammar_parser"],[10,6,1,"","build_key_value_expression"],[10,6,1,"","utf16_modifier"],[10,6,1,"","utf16be_modifier"],[10,6,1,"","utf16le_modifier"],[10,6,1,"","wide_modifier"]],"sigma.grammar.Base64FieldEquality":[[10,4,1,"","to_detection"],[10,5,1,"","value"]],"sigma.grammar.CoreExpression":[[10,5,1,"","args"],[10,4,1,"","from_parsed"],[10,4,1,"","postprocess"]],"sigma.grammar.Expression":[[10,5,1,"","operator"],[10,5,1,"","parent"],[10,4,1,"","postprocess"],[10,4,1,"","to_detection"],[10,4,1,"","visit"]],"sigma.grammar.FieldComparison":[[10,5,1,"","field"],[10,4,1,"","to_detection"],[10,4,1,"","to_field_with_modifiers"],[10,5,1,"","value"]],"sigma.grammar.FieldContains":[[10,4,1,"","to_detection"],[10,4,1,"","to_field_with_modifiers"],[10,5,1,"","value"]],"sigma.grammar.FieldEndsWith":[[10,4,1,"","to_detection"],[10,4,1,"","to_field_with_modifiers"],[10,5,1,"","value"]],"sigma.grammar.FieldEquality":[[10,5,1,"","field"],[10,5,1,"","parent"],[10,4,1,"","to_detection"],[10,5,1,"","value"]],"sigma.grammar.FieldIn":[[10,4,1,"","to_detection"],[10,5,1,"","value"]],"sigma.grammar.FieldRegex":[[10,4,1,"","to_detection"],[10,4,1,"","to_field_with_modifiers"],[10,5,1,"","value"]],"sigma.grammar.FieldStartsWith":[[10,4,1,"","to_detection"],[10,4,1,"","to_field_with_modifiers"],[10,5,1,"","value"]],"sigma.grammar.Identifier":[[10,5,1,"","args"],[10,2,1,"","identifier"],[10,5,1,"","parent"],[10,4,1,"","postprocess"]],"sigma.grammar.KeywordSearch":[[10,4,1,"","to_detection"],[10,5,1,"","value"]],"sigma.grammar.LogicalAnd":[[10,5,1,"","operator"],[10,4,1,"","postprocess"],[10,4,1,"","to_detection"]],"sigma.grammar.LogicalExpression":[[10,5,1,"","operator"],[10,4,1,"","postprocess"]],"sigma.grammar.LogicalNot":[[10,5,1,"","operator"],[10,4,1,"","to_detection"]],"sigma.grammar.LogicalOr":[[10,5,1,"","operator"],[10,4,1,"","postprocess"],[10,4,1,"","to_detection"]],"sigma.grammar.Selector":[[10,5,1,"","args"],[10,2,1,"","condition"],[10,5,1,"","parent"],[10,2,1,"","pattern"],[10,4,1,"","postprocess"]],"sigma.mitre":[[11,3,1,"","Attack"],[11,3,1,"","Tactic"],[11,3,1,"","Technique"]],"sigma.mitre.Attack":[[11,5,1,"","ATTACK_SINGLETON"],[11,5,1,"","ATTACK_URLS"],[11,5,1,"","SOURCE_TYPES"],[11,4,1,"","download"],[11,4,1,"","get_tactic"],[11,4,1,"","get_technique"],[11,4,1,"","load"],[11,5,1,"","tactics"],[11,5,1,"","techniques"]],"sigma.mitre.Tactic":[[11,5,1,"","id"],[11,5,1,"","title"],[11,2,1,"","url"]],"sigma.mitre.Technique":[[11,5,1,"","id"],[11,5,1,"","tactics"],[11,5,1,"","title"],[11,2,1,"","url"]],"sigma.schema":[[12,3,1,"","LowercaseString"],[12,3,1,"","Rule"],[12,3,1,"","RuleDetection"],[12,3,1,"","RuleDetectionFields"],[12,3,1,"","RuleDetectionList"],[12,3,1,"","RuleLevel"],[12,3,1,"","RuleLicense"],[12,3,1,"","RuleLogSource"],[12,3,1,"","RuleRelation"],[12,3,1,"","RuleRelationType"],[12,3,1,"","RuleStatus"],[12,3,1,"","RuleTag"],[12,3,1,"","SimpleDate"]],"sigma.schema.Rule":[[12,3,1,"","Config"],[12,5,1,"","author"],[12,5,1,"","date"],[12,5,1,"","description"],[12,5,1,"","detection"],[12,5,1,"","falsepositives"],[12,5,1,"","fields"],[12,4,1,"","from_sigma"],[12,4,1,"","from_yaml"],[12,5,1,"","id"],[12,5,1,"","level"],[12,5,1,"","license"],[12,5,1,"","logsource"],[12,5,1,"","modified"],[12,5,1,"","references"],[12,5,1,"","related"],[12,5,1,"","status"],[12,5,1,"","tags"],[12,5,1,"","title"],[12,4,1,"","to_sigma"],[12,4,1,"","transform"]],"sigma.schema.Rule.Config":[[12,5,1,"","extra"],[12,5,1,"","schema_extra"]],"sigma.schema.RuleDetection":[[12,3,1,"","Config"],[12,5,1,"","GRAMMAR_PARSER"],[12,5,1,"","condition"],[12,2,1,"","expression"],[12,4,1,"","get_expression"],[12,4,1,"","lookup_expression"],[12,4,1,"","parse_grammar"],[12,5,1,"","timeframe"],[12,4,1,"","transform"],[12,4,1,"","update_expression"],[12,4,1,"","validate_detection"]],"sigma.schema.RuleDetection.Config":[[12,5,1,"","extra"],[12,5,1,"","schema_extra"]],"sigma.schema.RuleDetectionFields":[[12,4,1,"","build_expression"]],"sigma.schema.RuleDetectionList":[[12,4,1,"","build_expression"]],"sigma.schema.RuleLevel":[[12,5,1,"","CRITICAL"],[12,5,1,"","HIGH"],[12,5,1,"","INFORMATIONAL"],[12,5,1,"","LOW"],[12,5,1,"","MEDIUM"],[12,4,1,"","to_severity"]],"sigma.schema.RuleLogSource":[[12,3,1,"","Config"],[12,5,1,"","category"],[12,5,1,"","definition"],[12,5,1,"","product"],[12,5,1,"","service"]],"sigma.schema.RuleLogSource.Config":[[12,5,1,"","extra"]],"sigma.schema.RuleRelation":[[12,3,1,"","Config"],[12,5,1,"","id"],[12,5,1,"","type"]],"sigma.schema.RuleRelation.Config":[[12,5,1,"","schema_extra"]],"sigma.schema.RuleRelationType":[[12,5,1,"","DERIVED"],[12,5,1,"","MERGED"],[12,5,1,"","OBSOLETES"],[12,5,1,"","RENAMED"]],"sigma.schema.RuleStatus":[[12,5,1,"","DEPRECATED"],[12,5,1,"","EXPERIMENTAL"],[12,5,1,"","STABLE"],[12,5,1,"","TEST"],[12,5,1,"","TESTING"],[12,5,1,"","UNSUPPORTED"]],"sigma.schema.RuleTag":[[12,2,1,"","name"],[12,2,1,"","namespace"],[12,4,1,"","validate"]],"sigma.transform":[[15,3,1,"","AddTags"],[15,3,1,"","ExpressionType"],[15,3,1,"","FieldFuzzyMap"],[15,3,1,"","FieldMap"],[15,3,1,"","FieldMatchReplace"],[15,3,1,"","Transformation"],[15,3,1,"","TransformationSchema"]],"sigma.transform.AddTags":[[15,3,1,"","Schema"],[15,4,1,"","transform_rule"]],"sigma.transform.AddTags.Schema":[[15,3,1,"","Config"],[15,5,1,"","tags"],[15,5,1,"","type"]],"sigma.transform.AddTags.Schema.Config":[[15,5,1,"","extra"],[15,5,1,"","schema_extra"]],"sigma.transform.ExpressionType":[[15,5,1,"","CONTAINS"],[15,5,1,"","ENDSWITH"],[15,5,1,"","STARTSWITH"]],"sigma.transform.FieldFuzzyMap":[[15,3,1,"","Schema"],[15,4,1,"","transform_expression"]],"sigma.transform.FieldFuzzyMap.Schema":[[15,3,1,"","Config"],[15,5,1,"","mapping"],[15,5,1,"","type"]],"sigma.transform.FieldFuzzyMap.Schema.Config":[[15,5,1,"","extra"],[15,5,1,"","schema_extra"]],"sigma.transform.FieldMap":[[15,3,1,"","Schema"],[15,4,1,"","transform_expression"]],"sigma.transform.FieldMap.Schema":[[15,3,1,"","Config"],[15,5,1,"","mapping"],[15,5,1,"","type"]],"sigma.transform.FieldMap.Schema.Config":[[15,5,1,"","extra"],[15,5,1,"","schema_extra"]],"sigma.transform.FieldMatchReplace":[[15,3,1,"","Schema"],[15,5,1,"","VALID_TYPES"],[15,4,1,"","transform_expression"]],"sigma.transform.FieldMatchReplace.Schema":[[15,3,1,"","Config"],[15,5,1,"","expression"],[15,5,1,"","field"],[15,5,1,"","pattern"],[15,5,1,"","target"],[15,5,1,"","type"]],"sigma.transform.FieldMatchReplace.Schema.Config":[[15,5,1,"","extra"],[15,5,1,"","schema_extra"]],"sigma.transform.Transformation":[[15,3,1,"","Schema"],[15,4,1,"","enumerate_builtin"],[15,4,1,"","lookup_class"],[15,4,1,"","transform_expression"],[15,4,1,"","transform_rule"]],"sigma.transform.Transformation.Schema":[[15,3,1,"","Config"],[15,4,1,"","load"],[15,5,1,"","type"]],"sigma.transform.Transformation.Schema.Config":[[15,5,1,"","extra"]],"sigma.transform.TransformationSchema":[[15,4,1,"","build"],[15,5,1,"","config"],[15,5,1,"","type"]],sigma:[[9,0,0,"-","errors"],[10,0,0,"-","grammar"],[11,0,0,"-","mitre"],[12,0,0,"-","schema"],[15,0,0,"-","transform"]]},objnames:{"0":["py","module","Python module"],"1":["py","exception","Python exception"],"2":["py","property","Python property"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:exception","2":"py:property","3":"py:class","4":"py:method","5":"py:attribute","6":"py:function"},terms:{"0":12,"001":12,"07":12,"1":18,"100":12,"12":12,"1234":12,"15":12,"159489a390df":12,"2":18,"2019":12,"2021":12,"256":12,"28b9":12,"3":18,"31":12,"4":18,"4344":12,"5":18,"535":12,"5m":12,"65":12,"7aa7009a":12,"8c1f":12,"abstract":[10,11,16],"byte":10,"case":[12,15],"class":[1,10,11,12,15,16,18,19],"default":[15,16],"do":19,"enum":[12,15],"final":17,"function":[1,12],"import":[1,12,18,19],"int":[9,10,12,18],"long":12,"new":[10,12,15,17,19],"return":[1,10,15,17,18,19],"short":12,"super":15,"switch":12,"true":[10,18],"while":[10,12],A:[1,9,12,15,17,19],AND:[10,12,17,19],And:10,As:[15,19],For:[1,16,19],If:[12,15,17],It:[12,18],No:12,OR:[10,12,19],Or:10,The:[1,9,10,12,15,16,17,18,19],There:10,These:[10,12],To:19,With:16,__init__:15,a53a02b997935fd8eedcb5f7abab9b9f:12,abc:[11,15],abil:16,abov:[17,19],accept:15,access:[18,19],accord:[12,17],activ:[12,16,18],ad:19,add:15,add_tag:15,addtag:15,after:[9,12,18],against:[15,17],alert:12,alia:12,all:[9,10,12,15,17,19],allow:[12,15,18,19],almost:12,along:[1,16],alongsid:19,also:[1,12,15,17],amount:12,ampliasecur:12,an:[9,10,12,15,16,17,18,19],analysi:12,analyst:12,ani:[10,12,15,17,18,19],anoth:[12,16,17],anymor:12,api:16,append:19,appli:[12,17,18],applic:12,ar:[1,9,10,12,17,18,19],arbitrari:[12,17,18],aren:12,arg:[10,12,16,19],argument:[9,16,18],articl:12,assist:1,associ:12,att:16,attack:[11,12,15,19],attack_singleton:11,attack_url:11,attribut:12,author:[1,12],back:[1,12,15],backend:[15,16,17],base64:10,base64_modifi:10,base64fieldequ:10,base64offset:10,base64offset_modifi:10,base:[9,10,11,12,15,16,18,19],basemodel:[10,11,12,15],basi:12,basic:18,becaus:12,being:[15,19],below:[17,19],between:[15,16],blog:12,bool:[10,18],both:[17,19],brief:12,brows:16,build:[10,12,15],build_express:12,build_grammar_pars:10,build_key_value_express:10,built:[1,15,16,17],builtin_transform:15,cach:16,calebstewart:16,call:[15,19],callabl:10,callback:10,camelcas:15,can:[1,12,15,16,17,18,19],categori:[12,17],categoris:12,cd:16,chain:18,chang:[16,19],charact:12,ck:16,classmethod:[10,11,12,15],classnam:[15,16,17],classvar:[10,11,12],cli:[0,1,16],clone:16,clussvc:12,cmd:17,code:17,collaps:10,collis:12,column:9,com:[11,12,16],combin:[9,12,16],come:1,command:[12,17,18,19],command_lin:15,commandlin:[12,15,17],common:[12,15,16,17],commonli:15,commonserializerschema:18,compar:[10,15,17],comparison:[10,15],compat:17,complet:19,completed_modifi:9,compliant:12,condit:[1,9,10,12,15,16,17,18,19],conditionsyntaxerror:9,config:[9,12,15,18,19],configur:[1,15,16],conjunct:12,consid:12,constant:10,constrainedstrvalu:12,construct:[1,10,12,15,16,17],contain:[1,12,15,17,18],convers:[12,16],convert:[1,2,10,12,16,17,18],copy_schema:[18,19],copyableschema:[18,19],core:[1,10,12],coreexpress:10,correl:12,could:[12,16,17],cover:12,creat:[12,16,17],creator:12,credenti:12,credential_access:12,criteria:12,critic:12,cti:11,current:12,custom:[12,15,16,17,18,19],custom_tag1:15,custom_tag2:15,custom_tag:19,customseri:[17,18],customtransform:[15,19],dashboard:12,data:[11,12,16,17,18,19],date:[11,12],datetim:12,dd:12,declar:12,def:[15,18,19],defaultindex:17,defer:16,defin:[1,10,12,15,17,18,19],definit:[10,12,15,16,18],depend:17,deprec:12,deriv:12,describ:12,descript:[12,15,17],detail:[1,11],detect:[1,9,10,12,15,16,17,18],develop:[12,16],dict:[10,12,15,17],dictionari:[1,12,15],differ:[17,19],direct:10,directli:[10,12,16,17],disk:[1,12],displai:12,doc:16,doe:[12,17,19],don:[10,19],dot:12,download:[11,16],dump:[1,9,16],duplic:[18,19],dure:[1,15],e96a73c7bf33a464c510ede582318bf2:12,e:[12,16,19],each:[10,15,17,19],easi:1,easier:18,easili:[18,19],editor:12,either:[10,12,15,19],elast:[1,13],elif:19,els:19,empti:12,enabl:18,encod:10,end:10,endswith:[12,15],enrich:12,enter:16,enterpris:11,entir:[15,19],entri:12,enumer:15,enumerate_builtin:15,environ:16,eql:[1,16],equal:[10,15],error:[0,1],error_wrapp:9,es:16,especi:17,etc:12,evalu:[10,12,15],even:12,event:12,everyth:12,ex:[12,15,17],exact:19,exampl:[12,15,16,17,19],example_extra:[18,19],except:[9,10,12],execut:[10,15],exist:12,exit:16,expect:[9,12],experiment:12,explicit:[15,17],explicitli:15,express:[10,12,15,16,18],expressiontyp:15,extend:[15,18,19],extra:[12,15,16,17,18,19],extra_data:[12,15],extra_tag:19,extrem:18,ey:10,f:[1,19],facilit:10,fail:9,failed_modifi:9,fals:[10,12],falseposit:12,feel:12,few:17,field:[1,9,10,12,15,17,18,19],field_fuzzy_map:15,field_map:[15,16,17],fieldcomparison:[10,15],fieldcontain:[10,15],fieldendswith:[10,15],fieldequ:10,fieldfuzzymap:15,fieldin:10,fieldmap:15,fieldmatchreplac:15,fieldregex:10,fieldstartswith:[10,15],fieldtransform:15,file:[1,12,16,17],filenam:16,filter:12,fine:12,first:[12,17],five:12,florian:12,fmt:9,follow:[12,15,17,18],forbid:15,format:[9,12,15,16,17,19],forward:12,found:9,framework:[1,11],free:12,frequent:12,from:[1,10,12,15,16,17,18,19],from_pars:10,from_sigma:12,from_yaml:[1,12],full:[12,17],fulli:[10,15,17],further:12,futur:[16,18,19],g:12,gener:[9,12,15],get_express:12,get_tact:11,get_techniqu:11,git:16,github:[12,16],githubusercont:11,given:[9,10,12,15,16,17,19],glob:12,global:12,go:10,grab:10,grammar:[0,1,12,15,16,19],grammar_pars:12,group:[10,12,15],ha:[12,15],had:12,handl:[1,12],have:12,hello:18,help:16,here:10,high:[12,19],highli:12,home:12,how:[17,19],howev:17,http:[11,12,16],huge:12,hyphen:12,i:[10,19],id:[11,12],identifi:[9,10,12],ignor:15,imag:[12,15,17],immedi:12,imphash:12,implement:[1,10,15,16,18,19],importlib:11,incid:12,includ:12,incorrect:9,index:[16,17],indic:[12,17],individu:[15,19],inform:[12,15],ingest:[1,16],inherit:[17,18,19],inlin:[1,15],inspect:12,instanc:[10,15,18,19],instanti:[17,19],instead:[10,12],integ:12,intend:12,interact:[10,16],interest:12,intern:[12,19],invalid:9,invalidfieldvalueerror:9,invalidmodifiercombinationerror:9,isinst:[18,19],issu:12,iter:12,its:12,join:17,json:[1,11,12,16,17],keep:12,kei:[10,19],keyword:[10,12],keywordsearch:10,known:12,kql:[1,16],kwarg:12,languag:1,last:12,lastli:1,lead:12,least:17,leav:10,letter:12,level:[12,19],licens:12,like:[10,15,19],line:[9,12],lineno:9,link:12,list:[1,2,9,10,11,12,15,16,17,18,19],liter:[10,15],load:[1,11,12,15,16,18],loc:10,locat:11,log:[12,16],logic:[10,12,17],logicaland:[10,19],logicalexpress:10,logicalnot:10,logicalor:[10,19],logsourc:[12,17],look:19,lookup:[11,12,15],lookup_class:15,lookup_express:12,low:12,lower:12,lowercasestr:12,made:12,mai:[12,16,17,18,19],main:[10,11,12,15],major:1,make:[1,19],malici:12,manag:16,manual:12,map:[1,15,17],master:11,match:[10,12,15,17,19],match_replac:15,max:12,mean:[17,19],meant:12,medium:12,memori:[1,12,17],merg:[12,17],messag:[9,16],method:[1,9,12,15,18,19],mind:16,miss:17,missingidentifi:12,mitr:[0,1,2,16],mm:12,mobil:11,model:[18,19],modif:[1,15,19],modifi:[1,9,10,12,15,16,19],modul:[0,1,2,13,15,16,17,19],more:[1,12],most:15,mostli:18,multipl:17,must:[10,15,17,18,19],my:[17,19],my_command_line_field:17,my_config:18,my_imag:17,name:[12,15,17],namespac:12,nativ:[1,12],necessari:[12,17],need:[10,12,15],nest:12,noisi:12,non:19,none:[9,10,11,12,15],normal:[12,15,19],notabl:12,note:10,number:12,numer:12,o:16,object:[1,12,15,17,19],obsolet:12,occur:12,omit:19,one:[12,15],ones:10,onli:18,oper:[10,15],oppos:10,option:[9,10,11,12,15,16,17,18,19],order:17,origin:15,other:[9,12,17],other_config:18,output:17,overrid:16,own:[16,18,19],packag:[0,12,16,17,19],page:16,pair:[10,19],paper:12,paramet:15,parent:[10,15],parentimag:[12,15],pars:[1,10,12],parse_grammar:12,parse_obj:12,parseexcept:9,parser:[10,12],parseresult:10,parsing_error:9,parti:16,pass:17,path:[11,12,15,17],pathlib:[11,12],pattern:[10,12,15],perform:17,period:12,pip:16,platform:[1,12],poetri:16,posit:12,possibl:[12,19],postprocess:10,pre:11,predefin:12,present:12,previous:12,print:[1,12],prior:[12,17,18],privat:12,process:[10,15],process_cr:[1,12,17],produc:12,product:[12,17],project:16,prompt:12,properti:[9,10,11,12,18,19],propos:12,provid:[9,15,16,17,18,19],pseudo:17,pull:12,pydant:[1,9,10,11,12,15,18,19],pypars:[1,9,10,12],pysigma:10,python:[1,10,12,15,17],qualifi:[15,17],queri:[1,12,17],r:18,rais:[9,12],rang:12,rare:12,rate:12,raw:11,re:1,reaction:12,read:12,reason:12,recommend:[12,18],recurs:[15,19],refer:[10,12,19],regex:15,regular:[10,12,15],rel:19,relat:12,relationship:12,relev:12,remain:12,renam:12,replac:[10,12,15],repositori:16,repr:18,repres:[10,12,18],represent:12,reproduc:12,request:[9,12],requir:[12,17,19],research:12,resolv:[10,12],result:[10,12],retriev:12,reus:15,review:12,rip:10,root:17,roth:12,rule:[1,9,10,12,15,16,17],ruledetect:[10,12],ruledetectionfield:12,ruledetectionlist:12,rulelevel:12,rulelicens:12,rulelogsourc:12,rulerel:12,rulerelationtyp:12,rulestatu:12,ruletag:[12,15,19],rulevalidationerror:9,runtim:[18,19],s0005:12,s:[1,10,12,17],safe:12,same:[10,19],sampl:17,save:[1,11,12],schema:[0,1,2,9,10,16,17,18,19],schema_extra:[12,15,18,19],scheme:12,search:[10,12,16],section:12,secur:12,see:[1,19],selection1:12,selection2:12,selector:10,self:[15,18,19],send:12,sentenc:12,separ:12,serial:[0,1,9,10,12,15,16,19],serializ:[1,12],serializerclass:18,serializernotfound:9,serializervalidationerror:9,servic:[12,17],set:12,setup:[16,19],sever:12,shell:16,shortcut:10,should:[10,12,15,16,18],shouldn:12,show:[16,19],sigma:[17,18,19],sigmaerror:9,sigmahq:12,sigmavalidationerror:9,simpl:[12,18],simpled:12,simpli:15,singl:[12,19],snake_cas:15,so:[15,16,19],some:[12,18],somewher:10,sourc:[12,15,16],source_typ:11,space:12,spdx:12,special:[12,19],specif:[9,10,12,15,16,17,19],specifi:[9,11,12,17],stabl:12,standard:16,start:10,startswith:15,state:12,statement:19,statu:12,stdout:16,still:12,str:[9,10,11,12,15,18,19],straightforward:19,string:[10,12,17],structur:[10,15,17],sub:15,subclass:9,submodul:[0,16],subpackag:[0,16],substitut:15,suppos:12,swap:19,syntax:[9,12],system:[12,16,17],t1003:12,t12345:[15,19],t1234:12,t:[10,12,19],tactic:11,tactit:11,tag:[12,15,19],take:[17,18,19],taken:10,target:[15,17],technic:12,techniqu:[11,12],term:12,test:[10,12,15],them:[1,12],thi:[1,9,10,12,15,16,17,18,19],thing:10,third:16,three:17,through:[1,18],timefram:12,titl:[1,11,12,15,19],title_format:19,to_detect:10,to_field_with_modifi:10,to_sever:12,to_sigma:[1,12],token:10,touch:17,transform:[0,1,2,9,10,12,16],transform_express:[15,19],transform_rul:[15,19],transformationschema:15,transformvalidationerror:9,transorm:12,travers:11,tree:10,trigger:12,tune:12,tupl:[10,15],tweet:12,two:[10,15,19],type:[9,10,12,15,17,18,19],unalt:15,unchang:10,under:16,underscor:12,understand:10,union:[10,11,12,18],uniqu:12,unknownidentifiererror:9,unknownmodifiererror:9,unknowntransform:9,unsupport:[9,12],unsupportedserializerformat:9,up:11,updat:[16,17],update_express:12,url:11,us:[1,12,15,16,17,18,19],usag:16,useless:18,user:[18,19],utf16_modifi:10,utf16be_modifi:10,utf16l:10,utf16le_modifi:10,util:[17,18,19],uuid:12,v:12,valid:[1,2,9,10,12,15,16,17],valid_typ:15,validate_detect:12,validationerror:9,valu:[9,10,12,15,19],varieti:1,variou:16,version:[15,19],via:[17,18,19],view:[17,18,19],virtual:16,visit:10,wa:[9,12],wai:12,wce:12,we:15,well:[16,18,19],what:[10,12],when:[9,10,16,17,19],which:[1,10,12,15,16,17,18,19],who:[18,19],whole:[15,19],wide_modifi:10,wiki:12,win_susp_net_execut:1,window:[1,12,17],windows_process_cr:17,within:[15,17,19],without:[12,17],world:18,write:[12,17],written:12,www:12,yaml:[1,12,15,16,17,19],yield:15,yml:[1,12,16],you:[1,10,12,15,16,17,18,19],your:[15,16,17,18,19],yyyi:12},titles:["sigma","sigma package","sigma.cli package","sigma.cli.converter module","sigma.cli.list module","sigma.cli.mitre module","sigma.cli.schema module","sigma.cli.transform module","sigma.cli.validate module","sigma.errors module","sigma.grammar module","sigma.mitre module","sigma.schema module","sigma.serializer package","sigma.serializer.elastic module","sigma.transform package","Welcome to Python Sigma\u2019s documentation!","Serializer Configurations","Creating Rule Serializers","Creating Rule Transformations"],titleterms:{"class":17,base:17,cli:[2,3,4,5,6,7,8],command:16,configur:[17,18,19],content:16,convert:3,creat:[18,19],definit:17,document:16,elast:14,error:9,exampl:18,express:19,grammar:10,indic:16,instal:16,interfac:16,line:16,list:4,log:17,mitr:[5,11],modul:[3,4,5,6,7,8,9,10,11,12,14],packag:[1,2,13,15],python:16,rule:[18,19],s:16,schema:[6,12,15],serial:[13,14,17,18],sigma:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],sourc:17,submodul:[1,2,13],subpackag:1,tabl:16,transform:[7,15,17,18,19],valid:8,welcom:16}})