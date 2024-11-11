<template>
    <div>
   
        <section class="contact-us">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="section-title">
                            <h2>Contact Us</h2>
                            <br/>
                        <br/>
                        <br/>
                        <br/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7">
                        <form    @submit.prevent="sendEmail" class="mb-4 mb-lg-0">
                            <div class="form-row">
                                <div class="col-md-6 form-group">
                                    <input  v-model="formData.name" type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div class="col-md-6 form-group">
                                    <input   v-model="formData.email" type="email" class="form-control" name="email" id="email" placeholder="Your Email" />
                                </div>
                            </div>
                            <div class="form-group">
                                <input   v-model="formData.subject" type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <textarea  v-model="formData.message" class="form-control" name="message" placeholder="Type Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-light">Contact Now</button>
                        </form>
                    </div>

                    <div class="col-lg-5">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin" width="100%" height="350" frameborder="0" style="border: 0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import axios from 'axios';

const formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

const sendEmail = async () => {
    try {
        const response = await axios.post("http://localhost:8000/api/Contact", formData.value);
        console.log(response.data.message);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    }
};
</script>

<style lang="css" scoped>
.contact-us {
    padding: 70px 0px;
    background: #795548;
}
.section-title h2 {
    color: #ffffff;
    font-size: 30px;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 8px;
    border-bottom: 5px solid #af8070;
    padding-bottom: 10px;
    display: inline-block;
}
.section-title p {
    color: #e8e8e8;
    margin-bottom: 30px;
}
.contact-us input,
.contact-us textarea {
    background: #fafafa;
}
.contact-us textarea {
    min-height: 188px;
    max-width: 100%;
}
.contact-us .map {
    overflow: hidden;
    border-radius: 4px;
}
</style>