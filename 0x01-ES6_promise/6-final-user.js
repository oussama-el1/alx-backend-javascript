import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      const mappedResult = result.map((elt) => ({
        status: elt.status,
        value: Object.prototype.hasOwnProperty.call(elt, 'reason') ? String(elt.reason) : elt.value,
      }));
      return mappedResult;
    });
}
