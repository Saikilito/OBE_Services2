const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const User = new Schema ({
    type: { type: String, enum:['student','worker','adm'], required: true },
    name: { type: String, required: true, lowercase: true },
    lastname: { type: String, required: true, lowercase:true },
    nationality:{ type: String, required: true },
    ci: { type: Number, unique: true, required: true },
    sex: { type: String, enum:['male','female'], required: true },
    email: { type: String, unique:true, required: true, lowercase:true },
    password: { type: String, required: true, lowercase:true },
    faculty:{ type:String },
    school:{ type: String },
    scholarship:{ type:String },
    scholarshipStatus:{ type: String },
    department:String,
    position:String,
    //Medal:False === NO GRADUANDO // Medal:Without === Graduando Sin Solicitar
    //Medal:Waiting === Graduando En espera // Medal:Accepted === Graduando Aceptado
    //Medal:Rejected
    medal:{
      status:String,
      medalURL:String,
      extension:{type:String, enum:['jpg','png']},
      bank:String,
      transf:String,
      importD:Number,
      date:Date
    },
    request:{
      id:{
        placeOfBirth:{type: String, lowercase:true},
        birthDate:Date,
        stateOfBirth:{type: String, lowercase:true},
        age:Number,
        civilStatus:{type: String, lowercase:true},
        phoneNumber:Number,
        studyDirection:{type: String, lowercase:true},
        residencePhone:Number,
        stateResidence:{type: String, lowercase:true},
        municipalityResidence:{type: String, lowercase:true},
        parishResidence:{type: String, lowercase:true},
        homeStudent:{type: String, lowercase:true},
        homeState:{type: String, lowercase:true},
        homeMunicipality:{type: String, lowercase:true},
        homeParish:{type: String, lowercase:true},
        homePhone:Number,
        otherPhone:Number
      },
      socioeconomic:{
        work:{type: String, lowercase:true},
        timeWork:Number,
        dedicationWork:{type: String, lowercase:true},
        benefit:{type: String, lowercase:true},
        liveWith:{type: String, lowercase:true},
        
        studentMoney:{
          getFamilyMoney:Number,
          otherMoney:Number,
          total:Number
        },
        studentExpenses:{
          paymentResidence:Number,
          food:Number,
          transport:Number,
          studyMaterials:Number,
          recreation:Number,
          personalExpenses:Number,
          medicalExpenses:Number,
          otherExpenses:Number,
          totalExpenses:Number
        },
        familyMoney:{
          familyIncome:Number,
          housingExpenses:Number,
          foodExpenses:Number,
          servicesExpenses:Number,
          phoneExpenses:Number,
          condominuim:Number,
          transport:Number,
          medicalExpenses:Number,
          otherExpenses:Number,
          totalExpenses:Number,
          nameResponsible:{type: String, lowercase:true},
          responsibleIncome:Number,
          familyBurden:Number
        }
      },
      academicData:{
        faculty:{type: String, lowercase:true},
        school:{type: String, lowercase:true},
        sem:String,
        average:Number,
        efficiency:Number,
        academicIndex:Number
      },
      schedule:{
        mondayE:String,
        mondayS:String,
        tuesdayE:String,
        tuesdayS:String,
        wednesdayE:String,
        wednesdayS:String,
        thursdayE:String,
        thursdayS:String,
        fridayE:String,
        fridayS:String,
        activity:String,
        skills:String
      }
    }
    
});

// User.pre('save', (next)=>{
  
//   let user = this
//   if(!user.isModified('password')) return next();
  
//   bcrypt.genSalt(10, (err, salt)=>{
//       if(err) return next(err)
//       else{
//           bcrypt.hash(user.password, salt, null, (err, hash)=>{
//               if(err) return next(err)
//               else{
//                   user.password = hash
//                   next()
//               }
//           })
//       }
//   })

// })

module.exports =  mongoose.model('Users', User)
