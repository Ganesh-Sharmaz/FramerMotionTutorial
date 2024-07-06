import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from "react";

function ScrollAnimation() {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(scrollYProgress,[0,1],["rgb(255,165,0)","rgb(160,32,240)"])
    return (
        <>
            <div className=" bg-black text-white">
                <motion.div
                style={{
                    // scaleX: scrollYProgress,
                    scaleX,
                    background,
                    transformOrigin: "left"
                }}
                className=" bg-red-800 w-full top-0 sticky h-8"
                />
                <div className=" p-10 pt-14 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique aut ex cum architecto laudantium consequuntur
                    numquam asperiores repellendus quo dolores. Repellendus
                    ipsam fugiat exercitationem nostrum perferendis ex incidunt
                    at unde. Eveniet repellendus placeat quidem, ut praesentium
                    provident dicta perferendis mollitia repellat quo asperiores
                    facere ex vitae atque nam natus. Reiciendis tenetur, est
                    dolorem distinctio tempora accusantium dolores adipisci
                    ratione autem. Numquam iure, aliquam repellendus totam
                    molestias consectetur non modi exercitationem eum officiis
                    ducimus ad nisi id doloremque, natus voluptas eaque!
                    Eligendi nam quis ipsum, adipisci maxime nostrum voluptate.
                    Laudantium, magnam. Dolore impedit expedita eum praesentium
                    sint fugiat! Veniam maiores voluptas voluptates molestiae
                    aliquid, cumque culpa in necessitatibus perferendis non
                    quam, pariatur, eaque libero illo nobis. Ratione nesciunt
                    reiciendis magni doloribus! Sapiente facere quo optio vitae
                    deleniti est atque. Necessitatibus, quibusdam non aspernatur
                    pariatur nihil ipsa sit odit similique eum tenetur
                    consectetur? Eveniet repellendus aliquam incidunt deserunt
                    delectus, ipsum reiciendis eaque? Quam reprehenderit
                    sapiente consequatur possimus? Consequuntur facere dolorem
                    sit impedit quam, explicabo modi nesciunt ea. Vero quae
                    ratione voluptas et molestiae. Iusto consectetur placeat vel
                    suscipit deserunt, voluptate qui? Consectetur!
                    Necessitatibus dolorem dicta blanditiis earum quasi
                    consectetur enim, alias culpa similique deserunt nobis. Quae
                    ad quibusdam eveniet quia quod ex maiores esse repellendus,
                    nostrum modi voluptate atque molestias, reprehenderit
                    similique. Voluptatibus corporis at earum esse. Hic quo
                    laborum expedita nulla. Quasi quaerat magni nulla quos
                    deleniti, ipsam ratione voluptatem labore. At dicta, totam
                    fugiat corrupti nam inventore nemo voluptates dolores?
                    Aperiam nesciunt quia rem distinctio iusto animi dolore illo
                    maiores blanditiis dolorem. Tempora cumque a deserunt magni
                    porro, exercitationem sit, ipsum saepe at fugit similique
                    numquam quos consequuntur voluptates vel. Repudiandae,
                    praesentium illum omnis minus tenetur delectus amet
                    consequuntur ratione harum quis et suscipit, consequatur
                    officia ad aspernatur ducimus eos magnam. Iusto, amet eos.
                    Quas totam neque odio repellendus soluta! Aliquam, tempora
                    dolore sed pariatur, quisquam dicta itaque dolores
                    laudantium ipsa molestiae aut, deserunt tenetur tempore ex!
                    Velit molestias quae eius, obcaecati neque debitis eum vitae
                    voluptate temporibus dolorum magnam. Molestiae totam alias
                    iusto fugit maiores? Numquam recusandae neque totam nemo
                    minima magnam, delectus ut beatae voluptate repellendus
                    impedit animi temporibus? Aliquam doloribus enim illum
                    tempore at officia dolorem porro. Officiis ad est nulla
                    repudiandae veniam, dolore tenetur esse recusandae aliquam
                    nihil, voluptate officia cum sunt dolores natus rem, fugiat
                    laudantium veritatis voluptas cupiditate explicabo laborum
                    doloribus iure. Similique, tempore? Veniam eligendi deleniti
                    aliquam ex libero facilis minus dignissimos placeat
                    assumenda nam iste doloremque error sapiente possimus vitae
                    perferendis, fuga provident voluptatem corrupti expedita
                    voluptatum sunt optio. Amet, est sequi. Possimus maxime
                    velit doloribus repellat numquam, obcaecati quam corrupti
                    optio tenetur repudiandae, nam magni, nostrum vitae
                    accusantium totam atque. Perspiciatis facilis maxime
                    voluptas ut ipsam, alias temporibus ad est sint. Omnis
                    pariatur saepe, ipsum aperiam consequatur unde corporis,
                    quos ut totam adipisci fuga similique recusandae eveniet.
                    Velit harum voluptate, similique architecto aut, eveniet
                    reiciendis perferendis, nobis eius iusto animi natus!
                    Praesentium, consequatur! Distinctio nobis, omnis rerum
                    nostrum ratione dicta. Iste eveniet reprehenderit qui
                    assumenda aspernatur! Iure provident quod corrupti itaque,
                    dolorum eligendi veritatis animi numquam iste, hic delectus
                    asperiores accusamus. Aliquam officiis in perferendis ea,
                    culpa quaerat natus earum maxime nobis facere et molestias,
                    rerum eligendi vel cumque rem id magnam. Facere magni
                    veniam, ipsam enim neque magnam. Eos, libero? Ducimus,
                    delectus at excepturi necessitatibus sed quae ab placeat
                    doloribus eaque? Mollitia saepe alias dolore exercitationem
                    quisquam magni accusantium perferendis unde fugit labore
                    dolorum quas quae voluptates, culpa dolorem maxime. A,
                    nostrum hic? Modi ut debitis vitae? Quia dignissimos
                    reiciendis totam quis earum vel quod, corporis nobis quas
                    magnam ratione officiis illum quaerat recusandae at
                    praesentium in quo voluptatibus architecto. Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Velit quod
                    sequi exercitationem possimus qui blanditiis et eaque omnis
                    sit saepe quam at eligendi, minima assumenda illum
                    perspiciatis delectus nostrum beatae! Sequi in ut explicabo
                    at beatae placeat suscipit minima similique nulla aspernatur
                    sit voluptate consequuntur, dicta porro quis! Ullam impedit
                    totam cum amet qui pariatur quisquam culpa facilis
                    perferendis dicta. Suscipit sed repellat quia, delectus
                    cupiditate perferendis harum rem illo consequatur asperiores
                    vel qui quidem tempore, quis, a deserunt commodi inventore
                    nam voluptas ullam quod voluptatum numquam optio. Similique,
                    alias! Iure qui cupiditate et ullam provident. Quo ducimus,
                    sit est libero eum, quia et minus odit totam voluptates
                    ullam asperiores obcaecati fugiat possimus sunt at ipsam
                    harum eaque minima voluptatum. Saepe accusantium quam odit
                    labore deleniti vel magnam qui? Minus facere error excepturi
                    laboriosam. Ullam harum quo, minus earum officia, quasi,
                    assumenda minima sit quidem incidunt voluptas cum ea
                    officiis? Perferendis earum ad ipsa aliquid error
                    praesentium deserunt facere impedit eos, vitae molestias id
                    blanditiis unde veniam explicabo adipisci pariatur! Fuga
                    sunt assumenda ex cupiditate et quo nobis itaque reiciendis.
                    Totam consequuntur laboriosam iusto facilis rerum! Laborum,
                    adipisci quae. Voluptate, enim ut tempora tempore harum
                    laboriosam quasi fugiat officiis illum quia animi dolorem
                    quos nulla modi sint! At, sint nostrum. Rerum non mollitia
                    aut omnis vel natus quasi placeat magnam commodi odit!
                    Voluptatum accusantium impedit, ut nulla aliquam deserunt
                    libero laboriosam? Ab ipsum consequuntur at iusto alias, ut
                    ipsa sit! Vero amet explicabo reiciendis animi distinctio
                    totam perferendis veritatis perspiciatis. Laborum aliquam,
                    quibusdam porro dolore ex amet omnis deleniti cupiditate est
                    consequatur. Explicabo neque aperiam accusamus voluptatibus
                    excepturi voluptas reiciendis. Voluptate illum dignissimos
                    nesciunt. Ratione, perspiciatis. Quis voluptas aliquam
                    eveniet numquam sed ratione praesentium vitae reiciendis
                    tenetur, nostrum repellendus, similique optio fugiat porro!
                    Sit nesciunt commodi rerum recusandae labore. Numquam.
                    Ipsam, eveniet? Repudiandae cumque eligendi minima ipsa,
                    minus fugiat distinctio optio illo eius libero dicta, ipsum
                    alias officia aperiam laboriosam corrupti nihil dolorum ut.
                    Fugiat iste asperiores deserunt magni dolor! Id pariatur
                    odit provident. Molestias esse omnis blanditiis saepe ipsam
                    accusamus. Exercitationem, non laboriosam assumenda minus
                    nesciunt harum sunt obcaecati quidem adipisci minima. Illum
                    ab, tempora quam placeat iste ipsam. Eveniet aliquid vitae,
                    voluptates dignissimos illo quia voluptatibus at optio non,
                    exercitationem excepturi officia. Incidunt consectetur, cum
                    aliquam fuga optio, et dicta rem excepturi magnam
                    laboriosam, ipsam nostrum corrupti. Ipsum. Explicabo
                    repellendus optio est facere accusantium reiciendis dolor
                    omnis libero modi delectus neque et maiores expedita
                    laboriosam labore unde ipsum, voluptate, aliquid officia
                    recusandae. Ipsa asperiores labore porro laudantium
                    voluptatem. Laudantium magnam minus nulla harum saepe
                    expedita, obcaecati animi sed libero non accusamus dolores
                    hic aut sit quis dolore, voluptatibus eligendi? Cupiditate,
                    eligendi quisquam voluptatum doloremque vel delectus natus!
                    Quis. Corrupti vel et ea deleniti consequatur magnam,
                    eveniet repudiandae quam. Blanditiis eos hic nihil sit ipsam
                    ullam ratione? Inventore repellat nemo vero assumenda
                    necessitatibus eum iste pariatur, ullam incidunt eius? Atque
                    facilis voluptates similique, nesciunt repudiandae aut
                    asperiores odio neque necessitatibus eaque quisquam
                    provident iste nemo quod quo praesentium saepe consequuntur
                    dolores vitae magni? Nostrum magni error excepturi minus
                    placeat? Architecto exercitationem soluta quod veniam vel
                    enim at iusto voluptatem quis! Veniam, maiores alias ipsam
                    laborum qui reiciendis? Sunt, veritatis molestiae dolores
                    impedit quis aut illo cupiditate animi modi tempore. Ipsa
                    quos ex dolor odio nihil quidem deserunt iusto eligendi illo
                    sapiente doloremque consequatur, autem quia incidunt labore
                    eaque nulla laborum. Earum voluptas reiciendis rem explicabo
                    eaque culpa fuga doloremque! Distinctio, culpa! Doloremque
                    laborum sed accusamus cupiditate qui ipsam reiciendis,
                    necessitatibus incidunt harum eum debitis hic, voluptate
                    odio omnis magni ex culpa maxime quibusdam voluptates vero
                    corporis natus tempore quasi. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Harum nemo ut id voluptates
                    error optio corporis, incidunt repudiandae aperiam itaque
                    provident, commodi corrupti molestias possimus distinctio.
                    Id adipisci velit molestias? Ut fuga aut aliquid sunt nemo
                    necessitatibus. Earum assumenda iste ex debitis, non harum
                    quam amet nisi minus, laudantium quis nesciunt delectus
                    excepturi suscipit veritatis. Porro dolorum id soluta nam.
                    Hic minima exercitationem totam provident corrupti amet
                    perferendis fugiat quisquam, incidunt reiciendis fugit vitae
                    itaque rerum sapiente autem neque, ex quia molestias.
                    Adipisci totam, in optio error vero accusamus ullam. Velit
                    facere, eum vel eos deserunt eligendi voluptatum repellat
                    esse in excepturi iure temporibus minus magni amet quo
                    dolores, quam incidunt reiciendis. Adipisci harum dolorem ab
                    facilis, et deleniti sapiente! Sit sapiente voluptate,
                    quibusdam ipsam quaerat laborum, ex voluptatum nemo quisquam
                    incidunt nostrum consequuntur nesciunt odit est eligendi in
                    pariatur. Nemo eligendi nobis cum libero, blanditiis eaque
                    aut quaerat facere! Odio explicabo et repellat dolorem earum
                    doloremque doloribus soluta eum nostrum itaque velit veniam
                    omnis blanditiis voluptate vel voluptates nesciunt, amet at.
                    Ab dolore, fugiat error omnis non accusantium
                    exercitationem? Saepe voluptates praesentium labore
                    consequatur, aspernatur, tenetur non eos necessitatibus,
                    iste eveniet officiis debitis nulla placeat quas sit?
                    Temporibus quibusdam sit numquam, rem nihil unde repellat
                    deleniti nesciunt repellendus est! Ea, distinctio nam? Error
                    impedit, laudantium dolore, iure magnam modi quasi officiis
                    et unde corrupti nesciunt nisi in, explicabo pariatur
                    temporibus sint earum aliquam. Totam error voluptatum
                    assumenda possimus mollitia? Iusto totam officiis, iure
                    animi illo blanditiis labore. Vitae animi quo molestiae,
                    asperiores exercitationem inventore repellat non
                    necessitatibus autem qui eveniet laborum cumque corporis
                    dignissimos nulla adipisci. Praesentium, in provident!
                    Commodi similique velit obcaecati quidem dolor explicabo,
                    perferendis laborum, porro aut sint labore recusandae
                    adipisci maxime quisquam? Rerum unde corrupti minus odio,
                    veritatis doloribus dolorem nostrum cupiditate laboriosam
                    consectetur magnam! Recusandae, cumque ipsa nulla unde
                    blanditiis quasi cum ipsam laborum ad ut facere sequi
                    consectetur sint quaerat esse fuga sunt eum ipsum ratione
                    delectus doloribus fugiat at nemo? Pariatur, autem. Iure
                    temporibus ex veniam provident quos ab fugiat commodi eum
                    corrupti, qui modi rem perspiciatis sed autem quis omnis sit
                    illo at, accusamus ad doloremque voluptate neque ratione
                    est. Temporibus. Nesciunt veritatis consectetur minus
                    commodi soluta. Suscipit odio fugiat quisquam laudantium
                    placeat necessitatibus dolorem harum laborum asperiores
                    dolor deleniti consequatur molestias, illo nam minus quasi
                    quis officia eos ullam natus? Voluptates ab ipsum dolor
                    veniam neque repudiandae nihil sunt, qui aut nesciunt
                    dolorum quasi sit adipisci hic consectetur consequatur
                    fugiat ducimus, ut at doloremque voluptatem possimus dolores
                    dolore tenetur? Possimus? Itaque at culpa nostrum aut enim
                    quas ea velit sequi est inventore praesentium necessitatibus
                    dicta magnam fugit repellat a, autem voluptatem eius
                    architecto tempora amet quis soluta accusamus iure. Natus!
                    Necessitatibus consequuntur nesciunt corporis provident
                    ratione dignissimos tenetur repudiandae assumenda aut,
                    harum, obcaecati itaque perferendis unde laudantium
                    laboriosam recusandae pariatur reiciendis impedit. Optio
                    omnis quis velit? Ducimus optio fugit alias! Deserunt
                    tenetur saepe molestiae quisquam rem veritatis labore,
                    accusamus sint quos temporibus enim laborum mollitia tempore
                    libero facilis harum possimus incidunt vitae inventore, iste
                    vero esse fugit dolor. Quos, voluptates. Quo modi minima ex!
                    Ad sapiente sunt laboriosam, odio tempore nam odit obcaecati
                    eum consequatur sit voluptatibus repellendus tenetur illo
                    dolor quisquam doloribus a porro laborum assumenda minima
                    consectetur officiis. Voluptatum tenetur, culpa provident
                    eaque aperiam quas quidem enim tempora iste praesentium
                    distinctio, aliquam repellendus nisi ipsum! Reprehenderit
                    provident sit sequi tempore debitis! Unde, expedita omnis
                    minima quidem vitae incidunt! Magni ipsa, dolorum
                    dignissimos aut nulla minima quasi ipsum vitae repellendus
                    deleniti odio natus libero a unde facere sed dolor labore.
                    Dicta mollitia porro quam officiis, aliquid consequatur.
                    Quos, harum.
                </div>
            </div>
        </>
    );
}

export default ScrollAnimation;
