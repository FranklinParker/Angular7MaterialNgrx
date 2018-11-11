const Contact = require('../models/Contact').Contact;

/**
 * save a contact
 *
 *
 * @param params
 * @returns {Promise<*>}
 */
const saveContact = async (params) => {
	const contactData = params.actionData;

	try {
		const contactSearch = await Contact.findOne({email: contactData.email });
		console.log('contactSearch', contactSearch);
		if(contactSearch){
			return {
				success: false,
				message: 'This Contact email exists'
			};
		}
		const contact = new Contact(contactData);
		const contactRec = await contact.save();
		const numberRecords = await Contact.count();
		return {
			success: true,
			record: contactRec,
      numberRecords: numberRecords
		};
	} catch (e) {
		return {
			success: false,
			message: e.message
		};
	}

};


/**
 * update a contact
 *
 *
 * @param params
 * @returns {Promise<*>}
 */
const updateContact = async (params) => {
  const contactData = params.actionData;

  try {
    const updatedContact = await Contact.findById(contactData.id);
    updatedContact.lastName = contactData.lastName;
    updatedContact.firstName = contactData.firstName;
    const result = await updatedContact.save();

    console.log('updated contact', updatedContact);

    return {
      success: true,
      record: result
    };
  } catch (e) {
    return {
      success: false,
      message: e.message
    };
  }

};
/**
 * get a list of contacts
 *
 * @param params
 * @returns {Promise<*>}
 */

const getContacts = async (params)=>{
	console.log('getContacts - params', params);
	const pageSize = params.query.pageSize;
	const currentPage = params.query.currentPage;
  const contactQuery = Contact.find();
  const count = await Contact.count();
  if (pageSize && currentPage) {
    contactQuery.skip(+pageSize * (+currentPage - 1))
      .limit(+pageSize);
  }
  try {
    const contactRecords = await contactQuery;
    return {
      success: true,
      records: contactRecords,
      numberRecords: count
    };
  } catch (e) {
    return {
      success: false,
      message: e.message
    };
  }
}


module.exports ={
	saveContact,
  updateContact,
	getContacts
}