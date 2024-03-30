import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient()

async function main() {
    //create user
    // const user =  await prisma.user.create({
    //     data:{
    //         name:'John doe',
    //         email:'sarbagyashahi894@gmail.com'
            
//get all the user

        //}
const Articles = await prisma.articles.create({
    data:{
        title:'Johns namee',
        body:'thbis is johns first article',
        author:{
            connect:{
                id:1,
            }
        }



    }
})
        
//})
console.log(Articles)
}

main()
.then(async () => {
    await prisma.$disconnect();
})

.catch(async(e) =>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
    
