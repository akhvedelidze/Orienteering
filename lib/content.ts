import {Activity, HistoryEntry, HistoryEssayChapter, HistoricalMap, HistoricalPerson, LearningLesson, NewsArticle, VideoResource, UsefulLink} from './types';
export type Lang='ka'|'en'; export const t=(l:Lang,ka:string,en:string)=>l==='ka'?ka:en;
export const federationLogo='/images/geof-logo.png';
export const nav=[['/','მთავარი','Home'],['/federation','ფედერაცია','Federation'],['/history','ისტორია','History'],['/orienteering','სწავლა','Learn'],['/news','სიახლეები და აქტივობები','News and activities'],['/resources','რესურსები','Resources'],['/contact','კონტაქტი','Contact']];
// History essay content is published from verified federation narrative. Placeholder entries remain only for unfinished archive sections.
export const history:HistoryEntry[]=[
 {id:'beginnings',titleKa:'სპორტული ორიენტირების დასაწყისი საქართველოში',titleEn:'The beginnings of orienteering in Georgia',descriptionKa:'ინფორმაციები მზადების პროცესშია',descriptionEn:'Information is being prepared.',images:[],people:[],documents:[],maps:[],source:[],verified:false},
 {id:'new-stage',titleKa:'სპორტის აღდგენა და ახალი ეტაპი',titleEn:'Revival and a new chapter',descriptionKa:'ინფორმაციები მზადების პროცესშია',descriptionEn:'Information is being prepared.',images:[],people:[],documents:[],maps:[],source:[],verified:false}];
export const historyLead={
 ka:'სპორტული ორიენტირება სპორტის გამორჩეული სახეობაა, რომელიც აერთიანებს ფიზიკურ მომზადებას, სწრაფ აზროვნებას, სივრცით ორიენტაციასა და დამოუკიდებლად გადაწყვეტილების მიღების უნარს. სპორტსმენის მიზანია უცნობ ტერიტორიაზე, სპეციალური რუკისა და კომპასის დახმარებით, განსაზღვრული თანმიმდევრობით გაიაროს საკონტროლო პუნქტები და დისტანცია რაც შეიძლება სწრაფად და ზუსტად დაასრულოს.',
 en:'Sport orienteering is a distinctive sport that combines physical fitness, quick thinking, spatial orientation and independent decision-making. The athlete’s aim is to visit control points in a set order on unfamiliar terrain, using a specialised map and compass, and to finish the course as quickly and accurately as possible.'
};
export const historyEssay:HistoryEssayChapter[]=[
 {
  id:'beginnings',
  titleKa:'სპორტული ორიენტირების დასაწყისი',
  titleEn:'The beginnings of sport orienteering',
  blocks:[
   {type:'p',ka:'სპორტული ორიენტირების სამშობლოდ სკანდინავია ითვლება. პირველი ცნობილი საჯარო შეჯიბრებები XIX საუკუნის მიწურულს გაიმართა ნორვეგიაში, რის შემდეგაც სპორტის ეს სახეობა განსაკუთრებით სწრაფად განვითარდა შვედეთში, ფინეთსა და ნორვეგიაში. მოგვიანებით ორიენტირება გავრცელდა ბალტიისპირეთის ქვეყნებში, ევროპის სხვა სახელმწიფოებში და თანდათან მსოფლიოს მრავალ ქვეყანაში.',en:'Scandinavia is regarded as the birthplace of sport orienteering. The first known public competitions were held in Norway at the end of the nineteenth century, after which the sport developed especially rapidly in Sweden, Finland and Norway. Orienteering later spread to the Baltic countries, other European states and, gradually, to many countries around the world.'},
   {type:'p',ka:'1961 წელს შეიქმნა **სპორტული ორიენტირების საერთაშორისო ფედერაცია — International Orienteering Federation (IOF)**, რომელმაც მნიშვნელოვანი როლი შეასრულა სპორტის საერთაშორისო განვითარებაში, ერთიანი წესებისა და სტანდარტების ჩამოყალიბებასა და საერთაშორისო შეჯიბრებების ორგანიზებაში.',en:'In 1961 the **International Orienteering Federation (IOF)** was founded. It played an important role in the international development of the sport, in establishing common rules and standards, and in organising international competitions.'},
   {type:'p',ka:'ორიენტირებაში პირველი მსოფლიო ჩემპიონატი 1966 წელს გაიმართა. შემდგომ წლებში სპორტის სახეობა მნიშვნელოვნად გაფართოვდა და ჩამოყალიბდა საერთაშორისო სპორტულ მოძრაობად.',en:'The first World Orienteering Championships were held in 1966. In the years that followed, the sport expanded significantly and became an international sporting movement.'}
  ]
 },
 {
  id:'georgia-first-steps',
  year:'1980',
  titleKa:'სპორტული ორიენტირების პირველი ნაბიჯები საქართველოში',
  titleEn:'First steps of sport orienteering in Georgia',
  blocks:[
   {type:'p',ka:'საქართველოში სპორტული ორიენტირების ისტორიაში ერთ-ერთი უმნიშვნელოვანესი თარიღია **1980 წლის მაისი**, როდესაც **ლაგოდეხის ნაკრძალში საქართველოს პირველი ოფიციალური ჩემპიონატი** გაიმართა.',en:'One of the most important dates in the history of orienteering in Georgia is **May 1980**, when **Georgia’s first official championship was held in Lagodekhi Nature Reserve**.'},
   {type:'p',ka:'ჩემპიონატში მონაწილეობდა ხუთი გუნდი:',en:'Five teams took part in the championship:'},
   {type:'list',items:[
    {ka:'**ლაგოდეხის გუნდი** — მწვრთნელი სოზარ ბერიშვილი',en:'**The Lagodekhi team** — coach Sozar Berishvili'},
    {ka:'**თბილისის ორი გუნდი** — მწვრთნელები გოგი ხიდეშელი, კოლია გურიანოვი და ფატი ბურდული',en:'**Two teams from Tbilisi** — coaches Gogi Khidesheli, Kolya Gurianov and Fati Burduli'},
    {ka:'**ქუთაისის გუნდი**, რომელიც პოლიტექნიკური ტექნიკუმის ბაზაზე იყო დაკომპლექტებული — მწვრთნელი ბონდო ხვედელიძე',en:'**The Kutaisi team**, formed on the basis of the Polytechnic Technicum — coach Bondo Khvedelidze'},
    {ka:'**აფხაზეთის ნაკრები** — მწვრთნელი ზურაბ შენგელია (პროკოფის ძე), რომელიც მოგვიანებით საქართველოს ერთიანობისათვის ბრძოლაში დაიღუპა',en:'**The Abkhazia team** — coach Zurab Shengelia (son of Prokopi), who later died in the struggle for Georgia’s unity'}
   ]},
   {type:'p',ka:'ეს გუნდები და მათი მწვრთნელები შემდგომ წლებში მნიშვნელოვან როლს ასრულებდნენ საქართველოში სპორტული ორიენტირების განვითარებაში და საბჭოთა კავშირის დაშლამდე აქტიურად მონაწილეობდნენ საქართველოს მასშტაბით გამართულ შეჯიბრებებში.',en:'These teams and their coaches played an important role in the development of sport orienteering in Georgia in the years that followed, and until the collapse of the Soviet Union they took an active part in competitions held across Georgia.'},
   {type:'p',ka:'ამ ადამიანების საქმიანობამ საფუძველი შეუქმნა სპორტული ორიენტირების ქართულ სკოლას და სპორტსმენთა ახალი თაობების მომზადებას.',en:'The work of these people laid the foundation of the Georgian school of sport orienteering and of the training of new generations of athletes.'}
  ]
 },
 {
  id:'ussr-championship',
  year:'1986',
  titleKa:'საქართველოს ნაკრები საბჭოთა კავშირის ჩემპიონატზე',
  titleEn:'Georgia’s team at the Soviet Union championship',
  blocks:[
   {type:'p',ka:'ქართული ორიენტირების ისტორიაში კიდევ ერთი მნიშვნელოვანი მოვლენა იყო **1986 წლის სექტემბერში საქართველოს ნაკრების მონაწილეობა საბჭოთა კავშირის ჩემპიონატში**.',en:'Another important event in the history of Georgian orienteering was **the Georgian team’s participation in the Soviet Union championship in September 1986**.'},
   {type:'p',ka:'შეჯიბრებები გაიმართა ყაზახეთსა და საბჭოთა კავშირის სხვა ტერიტორიებზე — მათ შორის **ყარაგანდაში, სემიპალატინსკსა და ისკიტიმში**.',en:'The competitions were held in Kazakhstan and other parts of the Soviet Union — including **Karaganda, Semipalatinsk and Iskitim**.'},
   {type:'p',ka:'საქართველოს ნაკრების შემადგენლობაში მონაწილეობდნენ:',en:'The Georgian team included:'},
   {type:'names',ka:'ბონდო ხვედელიძე, გიორგი ნასტენკო, ლალი ასპანაძე და გალავატენკო სოხუმიდან.',en:'Bondo Khvedelidze, Giorgi Nastenko, Lali Aspanadze and Galavatenko from Sokhumi.'},
   {type:'p',ka:'საბჭოთა კავშირის მასშტაბის ჩემპიონატში საქართველოს ნაკრების მონაწილეობა მნიშვნელოვანი ეტაპი იყო ქართული სპორტული ორიენტირების განვითარებისთვის და ქართველი სპორტსმენებისთვის უფრო მაღალი დონის შეჯიბრებებში გამოცდილების მიღების შესაძლებლობას წარმოადგენდა.',en:'Georgia’s participation in a championship of Soviet Union scale was an important stage in the development of Georgian sport orienteering, and gave Georgian athletes the chance to gain experience at a higher level of competition.'}
  ]
 },
 {
  id:'federation',
  year:'2005',
  titleKa:'დამოუკიდებელი საქართველო და ეროვნული ფედერაციის შექმნა',
  titleEn:'Independent Georgia and the founding of the national federation',
  blocks:[
   {type:'p',ka:'საქართველოს დამოუკიდებლობის აღდგენის შემდეგ სპორტული ორიენტირების ორგანიზაციული განვითარების ახალი ეტაპი დაიწყო.',en:'After the restoration of Georgia’s independence, a new stage in the organisational development of sport orienteering began.'},
   {type:'p',ka:'განსაკუთრებით მნიშვნელოვანი იყო **2005 წელი**.',en:'**2005** was a particularly important year.'},
   {type:'p',ka:'**2005 წლის 9 მაისს**, საინიციატივო ჯგუფის ძალისხმევით, დამოუკიდებელი საქართველოს ისტორიაში პირველად შეიქმნა **საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია**.',en:'On **9 May 2005**, through the efforts of an initiating group, the **Georgian National Orienteering Federation** was founded for the first time in the history of independent Georgia.'},
   {type:'p',ka:'ფედერაციის შექმნის საინიციატივო ჯგუფში შედიოდნენ:',en:'The initiating group included:'},
   {type:'names',ka:'ბონდო ხვედელიძე — ინიციატორი, ბესიკ ჯანელიძე, აკაკი ხვედელიძე, ვლადიმერ ნაკაშიძე და მალხაზ მაისაშვილი.',en:'Bondo Khvedelidze — initiator, Besik Janelidze, Akaki Khvedelidze, Vladimer Nakashidze and Malkhaz Maisashvili.'},
   {type:'p',ka:'ფედერაციის შექმნიდან რამდენიმე თვეში კიდევ ერთი უმნიშვნელოვანესი ნაბიჯი გადაიდგა: **2005 წლის 9 აგვისტოს საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია გაწევრიანდა სპორტული ორიენტირების საერთაშორისო ფედერაციაში (IOF)**.',en:'A few months after the federation was founded, another crucial step was taken: **on 9 August 2005 the Georgian National Orienteering Federation joined the International Orienteering Federation (IOF)**.'},
   {type:'p',ka:'ეს მოვლენა საქართველოსთვის საერთაშორისო ორიენტირების სივრცეში ოფიციალური ინტეგრაციის მნიშვნელოვანი ეტაპი გახდა და ქართველ სპორტსმენებსა და ორგანიზატორებს საერთაშორისო სპორტულ საზოგადოებასთან უფრო მჭიდრო თანამშრომლობის შესაძლებლობა მისცა.',en:'This event marked an important stage in Georgia’s official integration into the international orienteering community, and gave Georgian athletes and organisers the chance to work more closely with the international sporting world.'}
  ]
 },
 {
  id:'next-generation',
  titleKa:'ისტორიის შენარჩუნება და ახალი თაობა',
  titleEn:'Preserving history and a new generation',
  closing:true,
  blocks:[
   {type:'p',ka:'ქართული სპორტული ორიენტირების ისტორია მხოლოდ შეჯიბრებებისა და შედეგების ისტორია არ არის. ის იმ ადამიანების ისტორიაცაა, რომლებმაც სხვადასხვა პერიოდში საკუთარი შრომით, ენთუზიაზმითა და პირადი ინიციატივით სპორტის ეს სახეობა საქართველოში განავითარეს.',en:'The history of Georgian sport orienteering is not only a history of competitions and results. It is also the history of the people who, in different periods, developed this sport in Georgia through their own labour, enthusiasm and personal initiative.'},
   {type:'p',ka:'ლაგოდეხის პირველი ოფიციალური ჩემპიონატი, თბილისში, ქუთაისში, ლაგოდეხსა და აფხაზეთში ჩამოყალიბებული გუნდები, მათი მწვრთნელები და სპორტსმენები, საქართველოს ნაკრების მონაწილეობა საკავშირო შეჯიბრებებში და საბოლოოდ დამოუკიდებელი საქართველოს ეროვნული ფედერაციის შექმნა ქართული ორიენტირების ისტორიის მნიშვნელოვანი ეტაპებია.',en:'The first official championship in Lagodekhi; the teams formed in Tbilisi, Kutaisi, Lagodekhi and Abkhazia; their coaches and athletes; the Georgian team’s participation in all-union competitions; and finally the founding of the national federation of independent Georgia — these are important stages in the history of Georgian orienteering.'},
   {type:'p',ka:'ამ ისტორიის დოკუმენტირება განსაკუთრებით მნიშვნელოვანია დღეს, როდესაც საქართველოს სპორტული ორიენტირების ეროვნული ფედერაცია აქტიურად აგრძელებს მუშაობას სპორტის განვითარების მიმართულებით. განსაკუთრებული ყურადღება ეთმობა ბავშვებისა და ახალგაზრდების ჩართულობას, სკოლებში სპორტული ორიენტირების სწავლებას, ქართულენოვანი სასწავლო ლიტერატურის შექმნას, მწვრთნელებისა და პედაგოგების მომზადებას, ასევე სპორტის პოპულარიზაციას საქართველოს სხვადასხვა რეგიონში.',en:'Documenting this history is especially important today, when the Georgian National Orienteering Federation continues to work actively to develop the sport. Particular attention is given to the involvement of children and young people, the teaching of sport orienteering in schools, the creation of Georgian-language educational literature, the training of coaches and teachers, and the popularisation of the sport in Georgia’s regions.'},
   {type:'p',ka:'წინა თაობების მიერ დაგროვილი გამოცდილების შენარჩუნება და ახალი თაობისთვის გადაცემა საქართველოს სპორტული ორიენტირების ეროვნული ფედერაციის ერთ-ერთი მნიშვნელოვანი ამოცანაა.',en:'Preserving the experience gathered by previous generations and passing it on to a new generation is one of the important tasks of the Georgian National Orienteering Federation.'},
   {type:'p',ka:'ქართული ორიენტირების ისტორია გრძელდება — მისი წარსულის შენარჩუნებით, ახალი სპორტსმენების აღზრდით და სპორტის განვითარებით საქართველოს მასშტაბით.',en:'The history of Georgian orienteering continues — by preserving its past, raising new athletes and developing the sport across Georgia.'}
  ]
 }
];
export const maps:HistoricalMap[]=[]; export const people:HistoricalPerson[]=[]; export const activities:Activity[]=[];
export const guidePublication={
 cover:'/images/Publication/Cover.png',
 pdf:'/images/Publication/guide.pdf',
 titleKa:'სპორტული ორიენტირება — სასწავლო გზამკვლევი',
 titleEn:'Sport Orienteering — A Learning Guide',
 dateKa:'სექტემბერი 2026',
 dateEn:'September 2026'
};
export const news:NewsArticle[]=[
 {id:'guide-2026',slug:'saswavlo-gzamkvlevi',category:'publication',publishedAt:'2026-09',image:guidePublication.cover,
  titleKa:'გამოიცა სპორტული ორიენტირების სასწავლო გზამკვლევი',
  titleEn:'A learning guide to sport orienteering has been published',
  summaryKa:'საქართველოს სპორტული ორიენტირების ეროვნულმა ფედერაციამ 2026 წლის სექტემბერში გამოსცა სპორტული ორიენტირების ქართულენოვანი გზამკვლევი.',
  summaryEn:'In September 2026 the Georgian National Orienteering Federation published a Georgian-language sport orienteering guide.',
  contentKa:[
   'გამოცემა განკუთვნილია სკოლის მოსწავლეების, სპორტის მასწავლებლების, სტუდენტებისა და ყველა დაინტერესებული პირისთვის.'
  ],
  contentEn:[
   'The publication is intended for school pupils, physical education teachers, students and anyone interested in the sport.'
  ]}
];
export const archivePhotos=Array.from({length:75},(_,i)=>i+1).filter(n=>n!==36&&n!==53&&n!==71).map(n=>`/images/History/${n}.jpg`);
export const highlightPhotos=['1','2','5','7','9','10','11','17','64','67','69','70','74'].map(n=>`/images/Highlite/${n}.jpg`);
export const lessons:LearningLesson[]=[
 {id:'first',slug:'first-steps',level:1,order:1,titleKa:'პირველი ნაბიჯები',titleEn:'First steps',summaryKa:'გაიგე რუკის, სტარტის, ფინიშისა და საკონტროლო პუნქტის არსი.',summaryEn:'Meet the map, start, finish and control point.',contentKa:['რა არის რუკა?','რუკის ორიენტირება','მარტივი მარშრუტი'],contentEn:['What is a map?','Orienting the map','A simple route'],images:[],downloadableResources:[]},
 {id:'map',slug:'map',level:2,order:2,titleKa:'რუკის კითხვა',titleEn:'Reading the map',summaryKa:'ფერები, პირობითი ნიშნები, რელიეფი და მასშტაბი.',summaryEn:'Colours, symbols, terrain and scale.',contentKa:['რუკის ფერები','ჰორიზონტალები','ბილიკები და რელიეფი'],contentEn:['Map colours','Contour lines','Paths and terrain'],images:[],downloadableResources:[]},
 {id:'compass',slug:'compass',level:3,order:3,titleKa:'კომპასი',titleEn:'Compass',summaryKa:'ჩრდილოეთი, მიმართულება და რუკის სწორად დაჭერა.',summaryEn:'North, direction and keeping the map oriented.',contentKa:['კომპასის ნაწილები','ჩრდილოეთი','მიმართულება'],contentEn:['Compass parts','North','Direction'],images:[],downloadableResources:[]},
 {id:'route',slug:'route-choice',level:4,order:4,titleKa:'მარშრუტის არჩევა',titleEn:'Route choice',summaryKa:'სისწრაფესა და საიმედოობას შორის გააზრებული არჩევანი.',summaryEn:'Make a considered choice between speed and reliability.',contentKa:['საყრდენი ხაზები','შეტევის წერტილი','მანძილის შეფასება'],contentEn:['Handrails','Attack points','Distance estimation'],images:[],downloadableResources:[]},
 {id:'race',slug:'competition',level:5,order:5,titleKa:'შეჯიბრისთვის მზადება',titleEn:'Getting event-ready',summaryKa:'სტარტის პროცედურა, აღნიშვნა, ფინიში და უსაფრთხოება.',summaryEn:'Start procedure, punching, finish and safety.',contentKa:['სტარტი','აღნიშვნა','ფინიში და შედეგები'],contentEn:['Start','Punching','Finish and results'],images:[],downloadableResources:[]}];

export const videoGroups:{id:string;ka:string;en:string;videos:VideoResource[]}[]=[
 {id:'beginners',ka:'დამწყებთათვის',en:'For beginners',videos:[
  {id:'getting-started',youtubeId:'bUm2JUeFNh4',titleKa:'Getting Started — Get Out & Go Orienteering',titleEn:'Getting Started — Get Out & Go Orienteering',topicKa:'ორიენტირების პირველი ნაბიჯები',topicEn:'First steps in orienteering',descriptionKa:'განმარტავს რუკის ძირითად ელემენტებს, გავრცელებულ სიმბოლოებს, საკონტროლო პუნქტებსა და დისტანციის გავლის პრინციპს. კარგი პირველი ვიდეოა ადამიანისთვის, რომელსაც ორიენტირებასთან შეხება ჯერ არ ჰქონია.',descriptionEn:'Explains the main map elements, common symbols, control points and how a course is completed. A good first video for someone new to orienteering.'},
  {id:'newcomer-guide',youtubeId:'26Zc5AVkFis',titleKa:'Start Orienteering — A Newcomer’s Guide',titleEn:'Start Orienteering — A Newcomer’s Guide',topicKa:'დამწყების გზამკვლევი',topicEn:'A newcomer’s guide',descriptionKa:'ორიენტირების ზოგადი მიმოხილვა — როგორ დავიწყოთ, რა აღჭურვილობა გვჭირდება და როგორ მიმდინარეობს პირველი დისტანცია.',descriptionEn:'A general overview of orienteering — how to start, what equipment you need and how a first course works.'},
  {id:'for-beginners',youtubeId:'dVTbPKldR4Y',titleKa:'Orienteering for Beginners',titleEn:'Orienteering for Beginners',topicKa:'ორიენტირების საფუძვლები',topicEn:'Orienteering basics',descriptionKa:'დამწყებთათვის განკუთვნილი ზოგადი გაკვეთილი, რომელიც აერთიანებს რუკის, მიმართულებისა და საკონტროლო პუნქტების მოძებნის საფუძვლებს.',descriptionEn:'A beginner lesson covering map reading, direction and finding control points.'}
 ]},
 {id:'map-reading',ka:'რუკის წაკითხვა',en:'Reading the map',videos:[
  {id:'how-to-read',youtubeId:'LPw8rLTCiG4',orgKa:'Orienteering Australia',orgEn:'Orienteering Australia',titleKa:'Orienteering — How to Read the Map',titleEn:'Orienteering — How to Read the Map',topicKa:'ორიენტირების რუკის წაკითხვა',topicEn:'How to read an orienteering map',descriptionKa:'განმარტავს, რატომ განსხვავდება ორიენტირების რუკა ჩვეულებრივი რუკისგან და როგორ გამოიყენება ფერები, სიმბოლოები და ტერიტორიის დეტალები.',descriptionEn:'Explains how an orienteering map differs from an ordinary map, and how colours, symbols and terrain detail are used.'},
  {id:'map-explained',youtubeId:'YSAE56aoQQc',titleKa:'Orienteering Map Explained',titleEn:'Orienteering Map Explained',topicKa:'რუკის ფერები, სიმბოლოები და ჰორიზონტალები',topicEn:'Map colours, symbols and contours',descriptionKa:'მოკლე ვიზუალური შესავალი ორიენტირების რუკასა და რელიეფის ჰორიზონტალებში. განსაკუთრებით სასარგებლოა მოსწავლეებისა და დამწყები მონაწილეებისთვის.',descriptionEn:'A short visual introduction to the orienteering map and terrain contours. Especially useful for students and beginners.'}
 ]},
 {id:'compass',ka:'კომპასი და რუკის ორიენტირება',en:'Compass and map orientation',videos:[
  {id:'use-compass',youtubeId:'Pgm6WI0n-K8',orgKa:'Orienteering Australia',orgEn:'Orienteering Australia',titleKa:'Orienteering — How to Use the Compass',titleEn:'Orienteering — How to Use the Compass',topicKa:'კომპასის გამოყენება',topicEn:'Using the compass',descriptionKa:'აჩვენებს კომპასის ძირითად ნაწილებს, რუკის ორიენტირებასა და მოძრაობის მიმართულების განსაზღვრას.',descriptionEn:'Shows the main parts of the compass, how to orient the map and how to set a direction of travel.'},
  {id:'orienting-map',youtubeId:'a2aGiUl1u4c',titleKa:'Orienting a Map and Compass',titleEn:'Orienting a Map and Compass',topicKa:'რუკის ორიენტირება და აზიმუტის აღება',topicEn:'Orienting the map and taking a bearing',descriptionKa:'ეტაპობრივად აჩვენებს, როგორ დავამთხვიოთ რუკა მაგნიტურ ჩრდილოეთს და როგორ ავიღოთ მიმართულება ორ წერტილს შორის.',descriptionEn:'Step by step: how to align the map with magnetic north and take a bearing between two points.'},
  {id:'hector-haines',youtubeId:'PnvuEQXKa_o',orgKa:'Think Fast, Run Hard, Go Orienteering',orgEn:'Think Fast, Run Hard, Go Orienteering',titleKa:'Using the Compass — Hector Haines',titleEn:'Using the Compass — Hector Haines',topicKa:'სირბილისას მიმართულების შენარჩუნება',topicEn:'Holding direction while running',descriptionKa:'გამოცდილი სპორტსმენი აჩვენებს, როგორ გამოიყენოს მონაწილემ კომპასი მოძრაობისას და როგორ შეინარჩუნოს სწორი მიმართულება ტყეში.',descriptionEn:'An experienced athlete shows how to use the compass on the move and keep a correct direction in the forest.'},
  {id:'charlotte-ward',youtubeId:'2LZpOZI94bU',orgKa:'Think Fast, Run Hard, Go Orienteering',orgEn:'Think Fast, Run Hard, Go Orienteering',titleKa:'Setting the Map — Charlotte Ward',titleEn:'Setting the Map — Charlotte Ward',topicKa:'რუკის სწორად დაჭერა და ორიენტირება',topicEn:'Holding and setting the map',descriptionKa:'პრაქტიკული დემონსტრაცია, როგორ მოვაბრუნოთ რუკა კომპასისა და გარემოს შესაბამისად და როგორ შევინარჩუნოთ რუკასთან მუდმივი კონტაქტი.',descriptionEn:'A practical demonstration of turning the map to match the compass and terrain, and keeping constant contact with the map.'},
  {id:'compass-tutorial',youtubeId:'WohhHM3vVME',titleKa:'Orienteering Compass Tutorial',titleEn:'Orienteering Compass Tutorial',topicKa:'კომპასის გამოყენება დამწყებთათვის',topicEn:'Compass use for beginners',descriptionKa:'მარტივი, ეტაპობრივი გაკვეთილი ორიენტირების კომპასის გამოყენების შესახებ.',descriptionEn:'A simple, step-by-step tutorial on using an orienteering compass.'}
 ]},
 {id:'route-choice',ka:'მარშრუტის შერჩევა',en:'Route choice',videos:[
  {id:'route-choice',youtubeId:'-wNfknn_-9k',titleKa:'Orienteering — Route Choice',titleEn:'Orienteering — Route Choice',topicKa:'საუკეთესო მარშრუტის არჩევა',topicEn:'Choosing the best route',descriptionKa:'განიხილავს მარშრუტის არჩევის ძირითად ფაქტორებს — მანძილს, რელიეფს, ბილიკებს, მცენარეულობას, ნავიგაციის სირთულესა და შეცდომის რისკს.',descriptionEn:'Looks at the main factors in route choice: distance, terrain, paths, vegetation, navigation difficulty and the risk of error.'}
 ]},
 {id:'schools',ka:'სკოლებისა და მასწავლებლებისთვის',en:'For schools and teachers',videos:[
  {id:'school-playlist',playlistId:'PLjECyHDRqfzWwPov4Txx5XtXReOKx3Lfd',orgKa:'International Orienteering Federation და Enrich Education',orgEn:'International Orienteering Federation and Enrich Education',titleKa:'School Orienteering — ვიდეოების კრებული',titleEn:'School Orienteering — video collection',topicKa:'სასკოლო ორიენტირება',topicEn:'School orienteering',descriptionKa:'ვიდეოების კრებული მასწავლებლების, მწვრთნელებისა და სასკოლო პროგრამების ორგანიზატორებისთვის. მოიცავს ორიენტირების სასწავლო აქტივობებსა და გარე სწავლების მეთოდებს.',descriptionEn:'A video collection for teachers, coaches and school programme organisers. Includes orienteering learning activities and outdoor teaching methods.'}
 ]},
 {id:'organisers',ka:'ორგანიზატორებისა და მწვრთნელებისთვის',en:'For organisers and coaches',videos:[
  {id:'purple-pen',youtubeId:'PRMByZhgspI',titleKa:'Purple Pen Tutorial',titleEn:'Purple Pen Tutorial',topicKa:'ორიენტირების დისტანციის დაგეგმვა',topicEn:'Planning an orienteering course',descriptionKa:'აჩვენებს, როგორ შეიქმნას ორიენტირების დისტანცია Purple Pen-ის უფასო პროგრამაში, როგორ დაემატოს საკონტროლო პუნქტები და მომზადდეს კონტროლის აღწერები.',descriptionEn:'Shows how to create an orienteering course in the free Purple Pen software, add controls and prepare control descriptions.'}
 ]}
];

export const usefulLinkGroups:{id:string;ka:string;en:string;links:UsefulLink[]}[]=[
 {id:'beginners',ka:'სწავლა დამწყებთათვის',en:'Learning for beginners',links:[
  {id:'learn-o',featured:true,title:'Learn Orienteering',url:'https://www.learnorienteering.com/',ctaKa:'ეწვიეთ ვებსაიტს',ctaEn:'Visit the website',descriptionKa:'ეტაპობრივი სასწავლო პლატფორმა დამწყებიდან საშუალო დონემდე. მოიცავს რუკის წაკითხვას, კომპასს, აზიმუტს, რელიეფს, მარშრუტის არჩევასა და სხვა ნავიგაციურ ტექნიკებს.',descriptionEn:'A step-by-step learning platform from beginner to intermediate. Covers map reading, compass, bearing, terrain, route choice and other navigation techniques.'},
  {id:'better-beginner',featured:true,title:'Better Orienteering — Beginner',url:'https://betterorienteering.org/beginner/',ctaKa:'დაიწყეთ სწავლა',ctaEn:'Start learning',descriptionKa:'დამწყებთათვის განკუთვნილი ვიდეოები, პრაქტიკული განმარტებები და სავარჯიშოები.',descriptionEn:'Videos, practical explanations and exercises for beginners.'},
  {id:'better-teaching',title:'Better Orienteering — Schools and Teaching',url:'https://betterorienteering.org/teaching/',ctaKa:'სასწავლო რესურსების ნახვა',ctaEn:'View teaching resources',descriptionKa:'რესურსები მასწავლებლებისთვის, სკოლებისა და ახალგაზრდული ჯგუფებისთვის. მოიცავს გაკვეთილების გეგმებსა და ორიენტირების სწავლების რეკომენდაციებს.',descriptionEn:'Resources for teachers, schools and youth groups, including lesson plans and teaching recommendations.'},
  {id:'ousa-training',title:'Orienteering USA — Training',url:'https://orienteeringusa.org/resources/training/',ctaKa:'სასწავლო პროგრამის ნახვა',ctaEn:'View the training programme',descriptionKa:'ოთხდონიანი სასწავლო პროგრამა, რომელიც მონაწილეს დამწყებიდან რთულ ნავიგაციურ უნარებამდე ეტაპობრივად ავითარებს.',descriptionEn:'A four-level training programme that develops participants from beginner skills to more complex navigation.'},
  {id:'cascade',title:'Cascade Orienteering — Beginner Skills',url:'https://cascadeoc.org/training/beginner-skills/',ctaKa:'დამწყების გაკვეთილების ნახვა',ctaEn:'View beginner lessons',descriptionKa:'მოკლე და გასაგები მასალა რუკის მასშტაბის, ფერების, სიმბოლოებისა და კონტროლის აღწერების შესახებ.',descriptionEn:'Short, clear material on map scale, colours, symbols and control descriptions.'}
 ]},
 {id:'schools',ka:'სკოლებისა და მასწავლებლებისთვის',en:'For schools and teachers',links:[
  {id:'wow',featured:true,title:'World Orienteering Week',url:'https://worldorienteeringweek.com/',ctaKa:'ეწვიეთ ვებსაიტს',ctaEn:'Visit the website',descriptionKa:'IOF-ის საერთაშორისო ინიციატივა, რომელიც სკოლებსა და კლუბებს ორიენტირების სასწავლო ღონისძიებების ჩატარებაში ეხმარება.',descriptionEn:'An IOF international initiative that helps schools and clubs run orienteering learning events.'},
  {id:'iof-recreational',title:'IOF — Recreational Orienteering',url:'https://orienteering.sport/iof/global-development/recreational-orienteering/',ctaKa:'რესურსების ნახვა',ctaEn:'View resources',descriptionKa:'სასკოლო, ახალგაზრდული და გასართობი ორიენტირების აქტივობები და საერთაშორისო რესურსები.',descriptionEn:'School, youth and recreational orienteering activities and international resources.'},
  {id:'iof-edu',title:'IOF — Educational Material',url:'https://orienteering.sport/iof/search-materials/',ctaKa:'მასალების მოძიება',ctaEn:'Search materials',descriptionKa:'საერთაშორისო სასწავლო მასალების საძიებო სივრცე დამწყებებისთვის, სკოლებისთვის, მწვრთნელებისა და ღონისძიებების ორგანიზატორებისთვის.',descriptionEn:'A search space for international educational materials for beginners, schools, coaches and event organisers.'},
  {id:'school-videos',title:'School Orienteering — ვიდეოკრებული',url:'https://www.youtube.com/playlist?list=PLjECyHDRqfzWwPov4Txx5XtXReOKx3Lfd',ctaKa:'ვიდეოკრებულის ნახვა',ctaEn:'View the video collection',descriptionKa:'IOF-ისა და Enrich Education-ის ერთობლივი ვიდეომასალები სასკოლო ორიენტირებისა და გარე სწავლებისთვის.',descriptionEn:'Joint IOF and Enrich Education videos for school orienteering and outdoor teaching.'}
 ]},
 {id:'maps',ka:'რუკები და სიმბოლოები',en:'Maps and symbols',links:[
  {id:'iof-mapping',title:'IOF Mapping',url:'https://orienteering.sport/iof/mapping/',ctaKa:'ოფიციალური სპეციფიკაციების ნახვა',ctaEn:'View official specifications',descriptionKa:'ორიენტირების რუკების ოფიციალური საერთაშორისო სპეციფიკაციები: ტყის, სპრინტის, MTB და სათხილამურო ორიენტირების რუკები.',descriptionEn:'Official international specifications for orienteering maps: forest, sprint, MTB and ski orienteering.'},
  {id:'omap-wiki',featured:true,title:'O-Map Wiki',url:'https://omapwiki.orienteering.sport/',ctaKa:'O-Map Wiki-ის გახსნა',ctaEn:'Open O-Map Wiki',descriptionKa:'რუკის სიმბოლოების ვიზუალური ცნობარი ფოტოებით, განმარტებებითა და მათი სწორად გამოყენების მაგალითებით. განსაკუთრებით სასარგებლოა რუკის შემქმნელებისა და მასწავლებლებისთვის.',descriptionEn:'A visual reference of map symbols with photos, explanations and examples of correct use. Especially useful for mapmakers and teachers.'},
  {id:'iof-controls',title:'IOF Control Descriptions',url:'https://orienteering.sport/iof/rules/control-descriptions/',ctaKa:'კონტროლის აღწერების ნახვა',ctaEn:'View control descriptions',descriptionKa:'საკონტროლო პუნქტების აღწერის საერთაშორისო სიმბოლოები და მოქმედი ოფიციალური სპეციფიკაცია.',descriptionEn:'International symbols for control descriptions and the current official specification.'},
  {id:'learn-symbols',title:'Learn Orienteering — IOF Symbols',url:'https://www.learnorienteering.com/AdIOFsymbols.html',ctaKa:'სიმბოლოების სწავლა',ctaEn:'Learn the symbols',descriptionKa:'კონტროლის აღწერების სიმბოლოების შედარებით მარტივი, დამწყებზე მორგებული განმარტებები.',descriptionEn:'Simpler, beginner-friendly explanations of control description symbols.'}
 ]},
 {id:'orgs',ka:'საერთაშორისო ორგანიზაციები და კალენდრები',en:'International organisations and calendars',links:[
  {id:'iof',featured:true,title:'International Orienteering Federation — IOF',url:'https://orienteering.sport/',ctaKa:'ეწვიეთ IOF-ის ვებსაიტს',ctaEn:'Visit the IOF website',descriptionKa:'საერთაშორისო ორიენტირების ფედერაციის ოფიციალური ვებსაიტი — წესები, დისციპლინები, სიახლეები, განათლება და განვითარების პროგრამები.',descriptionEn:'The official website of the International Orienteering Federation — rules, disciplines, news, education and development programmes.'},
  {id:'eventor',featured:true,title:'IOF Eventor',url:'https://eventor.orienteering.sport/',ctaKa:'ღონისძიებების კალენდრის ნახვა',ctaEn:'View the event calendar',descriptionKa:'მსოფლიო და რეგიონული შეჯიბრებების ოფიციალური კალენდარი, მონაწილეთა ინფორმაცია, შედეგები და ღონისძიებების დოკუმენტები.',descriptionEn:'The official calendar of world and regional events, with participant information, results and event documents.'},
  {id:'ranking',title:'IOF World Ranking',url:'https://ranking.orienteering.org/',ctaKa:'მსოფლიო რეიტინგის ნახვა',ctaEn:'View world ranking',descriptionKa:'მსოფლიო რეიტინგები, სპორტსმენების პროფილები და სარეიტინგო შეჯიბრებების კალენდარი.',descriptionEn:'World rankings, athlete profiles and the ranking event calendar.'},
  {id:'british',title:'British Orienteering',url:'https://www.britishorienteering.org.uk/',ctaKa:'ეწვიეთ ვებსაიტს',ctaEn:'Visit the website',descriptionKa:'დიდი ბრიტანეთის ეროვნული ფედერაციის ვებსაიტი სასწავლო, საკლუბო და სამწვრთნელო რესურსებით.',descriptionEn:'The website of the British national federation, with learning, club and coaching resources.'},
  {id:'ousa',title:'Orienteering USA',url:'https://orienteeringusa.org/',ctaKa:'ეწვიეთ ვებსაიტს',ctaEn:'Visit the website',descriptionKa:'აშშ-ის ორიენტირების ფედერაციის რესურსები — სწავლება, კლუბების განვითარება, შეჯიბრებების ორგანიზება და უსაფრთხოება.',descriptionEn:'Resources from Orienteering USA — teaching, club development, event organisation and safety.'}
 ]},
 {id:'analysis',ka:'ვარჯიში და მარშრუტის ანალიზი',en:'Training and route analysis',links:[
  {id:'livelox',featured:true,title:'Livelox',url:'https://www.livelox.com/',ctaKa:'გახსენით Livelox',ctaEn:'Open Livelox',descriptionKa:'GPS-მარშრუტების ჩაწერისა და შედარების პლატფორმა. საშუალებას გაძლევთ გააანალიზოთ საკუთარი გზა, დროის დანაკარგი და სხვა მონაწილეთა მარშრუტები.',descriptionEn:'A platform for recording and comparing GPS routes. Analyse your own route, time loss and other participants’ routes.'},
  {id:'routegadget',title:'RouteGadget',url:'https://www.routegadget.co.uk/',ctaKa:'გახსენით RouteGadget',ctaEn:'Open RouteGadget',descriptionKa:'შეჯიბრების შემდეგ მარშრუტების დახატვის, GPS-ტრეკების ატვირთვის, მონაწილეთა გზებისა და მონაკვეთების დროების შედარების ინსტრუმენტი.',descriptionEn:'A tool for drawing routes after an event, uploading GPS tracks, and comparing participants’ routes and split times.'},
  {id:'iorienteering',title:'iOrienteering',url:'https://www.iorienteering.com/',ctaKa:'ეწვიეთ iOrienteering-ს',ctaEn:'Visit iOrienteering',descriptionKa:'მობილური პლატფორმა, რომლის საშუალებითაც შესაძლებელია ორიენტირების ღონისძიებების პოვნა, მარტივი დისტანციების შექმნა და QR-კოდებით დროის აღრიცხვა.',descriptionEn:'A mobile platform for finding orienteering events, creating simple courses and timing with QR codes.'}
 ]},
 {id:'news',ka:'სიახლეები და საერთაშორისო საზოგადოება',en:'News and the international community',links:[
  {id:'worldofo',featured:true,title:'World of O',url:'https://worldofo.com/',ctaKa:'ეწვიეთ World of O-ს',ctaEn:'Visit World of O',descriptionKa:'საერთაშორისო ორიენტირების სიახლეები, შეჯიბრებების ანალიზი, რუკები, მარშრუტები და მნიშვნელოვანი მოვლენები მთელი მსოფლიოდან.',descriptionEn:'International orienteering news, event analysis, maps, routes and major stories from around the world.'},
  {id:'iof-software',title:'IOF-ის პროგრამული უზრუნველყოფის ცნობარი',url:'https://orienteering.sport/iof/it/list-of-software-for-orienteering/',ctaKa:'პროგრამების ცნობარის ნახვა',ctaEn:'View the software list',descriptionKa:'ორიენტირების რუკების, დისტანციების დაგეგმვის, შედეგების, GPS-ანალიზისა და ღონისძიებების მართვის პროგრამების ჩამონათვალი.',descriptionEn:'A list of software for orienteering maps, course planning, results, GPS analysis and event management.'}
 ]}
];

export const featuredLinkIds=['iof','learn-o','better-beginner','wow','omap-wiki','eventor','livelox','worldofo'];
