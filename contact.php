<?php include("header.php"); ?>
<main class="main">
    <div class="page-header">
        <div class="page-header_bg">
        </div>
        <div class="container">
            <ul class="breadcrumb">
                <li>
                    <a href="#">
                        HOME
                    </a>
                </li>
                <li>
                    CONTACT
                </li>
            </ul>
        </div>
        <img alt="" class="page-header-svg" src="img/bg-img/subpageheader.svg">
        </img>
    </div>
    <div class="container">
        <h1 class="page-title">
            CONTACT US
        </h1>
        <!-- form -->
        <form action="#" class="zn_contact_form contact_form cf-elm-form row " data-redirect="" method="post">
            <div class="col-sm-6 input-holder">
                <input class="form-control" id="form-field-firstname" name="form-field-firstname" placeholder="Enter your first name" type="text" value="" />
                    <label class="control-label" for="form-field-firstname">
                        Firstname
                    </label>
            </div>
            <div class="col-sm-6 input-holder">
                <input class="form-control" id="form-field-lastname" name="form-field-lastname" placeholder="Enter your last name" type="text" value="" />
                    <label class="control-label" for="form-field-lastname">
                        Lastname
                    </label>
            </div>

            <div class="col-sm-6 input-holder">
                <input class="form-control" id="form-field-email" name="form-field-email" placeholder="Type your email address" type="text" value="" />
                    <label class="control-label" for="form-field-email">
                        Email
                    </label>
            </div>

            <div class="col-sm-3 input-holder">
                <input class="form-control" id="form-field-telephone" name="form-field-telephone" placeholder="Type your telephone number" type="text" value="" />
                    <label class="control-label" for="form-field-telephone">
                        Telephone
                    </label>
            </div>

            <div class="col-sm-3 input-holder">
                <input class="form-control" id="form-field-cellphone" name="form-field-cellphone" placeholder="Type your cellphone number" type="text" value="" />
                    <label class="control-label" for="form-field-cellphone">
                        Cellphone
                    </label>
            </div>

            <!-- Start Select Options -->
            <div class="select-option-container col-sm-12 input-holder">
                <select class="dept-select select-option form-control" id="form-field-unquiry-type" name="form-field-unquiry-type">
                    <option selected="selected" value="">
                        -- Select Unquiry Type --
                    </option>
                    <option value="product_service_inquiry">
                        Product/Service Inquiry
                    </option>
                    <option value="billing_payment_concerns">
                        Billing/Payment Concerns
                    </option>
                    <option value="general_technical_concerns">
                        General Technical Concerns
                    </option>
                </select>
                <label class="control-label" for="form-field-unquiry-type">
                    Unquiry Type
                </label>
            </div>
            <!-- End Select Options -->


            <!-- Start Department new add -->
            <!-- for Sales -->
            <div id="product_service_inquiry" class="options col-sm-12 input-holder">
                <select class="form-control" id="form-field-prod-serv-inquiry" name="form-field-prod-serv-inquiry">
                    <option selected="selected" value="">
                        -- Select Product/Services --
                    </option>
                    <option value="internet">
                        Internet
                    </option>
                    <option value="data">
                        Data
                    </option>
                    <option value="voice">
                        Voice
                    </option>
                    <option value="manage_services">
                        Managed Services
                    </option>
                </select>
                <label class="control-label" for="form-field-prod-serv-inquiry">
                    Product/Service Inquiry
                </label>
            </div>
            <!-- End Department new add -->

            <div class="col-sm-12 input-holder">
                <input class="form-control" id="form-field-subject" name="form-field-subject" placeholder="Enter a subject for your message" type="text" value="">
                    <label class="control-label" for="form-field-subject">
                        Subject
                    </label>
            </div>
            <div class="col-sm-12 input-holder">
                <textarea class="form-control" cols="40" id="input-form-message" name="input-form-message" placeholder="Write your message here" rows="6"></textarea>
                <label class="control-label" for="input-form-message">Message</label>
            </div>
            <div class="col-sm-12 zn_captcha">
                <span class="zn-recaptcha" data-colorscheme="light" data-sitekey="6Lfl1AwTAAAAAFtWQqqE_WNy6HBNaUk3dnEKbYPx" id="zn_recaptcha_1">
                    <div class="captcha-container">
                        <div>
                            <iframe frameborder="0" height="78" name="undefined" role="presentation" scrolling="no" src="https://www.google.com/recaptcha/api2/anchor?k=6Lfl1AwTAAAAAFtWQqqE_WNy6HBNaUk3dnEKbYPx&co=aHR0cDovL2thbGx5YXMubmV0Ojgw&hl=en&v=r20160921114513&theme=light&size=normal&cb=ohd8gp6gih2q" title="recaptcha widget" width="304">
                            </iframe>
                        </div>
                        <textarea class="g-recaptcha-response" id="g-recaptcha-response" name="g-recaptcha-response">
                        </textarea>
                    </div>
                </span>
            </div>
            <div class="col-sm-12 zn_hidden">
                <input class="zn_validate_none" id="zn_pb_form_submit_1" name="zn_pb_form_submit_1" type="hidden" value="1">
                
            </div>
            <div class="col-sm-12 contact-send-button">
                <div class="zn_contact_ajax_response titleColor" id="zn_form_id1">
                </div>
                <div class="contact-send">
                    <a class="animated-button thar-three" href="">
                        Send
                    </a>
                </div>
            </div>
        </form>
        <div class="easternmap">
            <div class="row">
            <div class="col-md-3">
                <div class="categoryTab">
                    <div class="toggleNav">Contact us</div>
                    <ul class="tabNav">
                        <li class="active">
                            <a class="active-a" href="#tab1">
                                Business Center Locations
                            </a>
                        </li>
                        <li>
                            <a href="#tab2">
                                Payment Facilities
                            </a>
                        </li>
                        <li>
                            <a href="#tab3">
                                Customer Service Hotline
                            </a>
                        </li>
                        <li>
                            <a href="#tab4">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9">
                <div class="tabContent">
                    <div class="tabPane" id="#tab1">
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5461.232332757236!2d121.01576453511193!3d14.560601999171782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97fbcefe20dd6c56!2sEastern+Telecommunications+Philippines+Incorporated!5e0!3m2!1sen!2sph!4v1475657661675" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                        <div>
                            <h4 class="makati-map-header">
                                Makati
                            </h4>
                            <p>
                                Ground Floor, Telecom Plaza
                                <br>
                                    316 Sen. Gil Puyat Ave., Salcedo Village
                                    <br>
                                        Makati City 1200
                                    <br>
                                <br>
                            </p>
                        </div>
                    </div>
                    <div class="tabPane" id="#tab2">
                        <h3>
                            Paying your Eastern Communications bills is easy!
                        </h3>
                        <p>
                            You may use the following payment facilities to settle your accounts:
                        </p>
                        <ul class="payment-facilities-tab">
                            <li>
                                <strong>
                                    Over-the-counter Payments
                                </strong>
                                <ul>
                                    <li>
                                        Eastern Communications
                                        <a href="#">
                                            Business Centers
                                        </a>
                                    </li>
                                    <li>
                                        Through Accredited Banks:
                                        <ul>
                                            <li>
                                                Banco de Oro
                                            </li>
                                            <li>
                                                Bank of the Philippine Islands
                                            </li>
                                            <li>
                                                Metrobank
                                            </li>
                                            <li>
                                                Bank of Commerce
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>
                                    Via Phone, Internet and Mobile Banking
                                </strong>
                                <ul>
                                    <li>
                                        Through Accredited Banks:
                                        <ul>
                                            <li>
                                                Banco de Oro
                                            </li>
                                            <li>
                                                Bank of the Philippine Islands
                                            </li>
                                            <li>
                                                Metrobank
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <strong>
                                    Via Wire Transfer
                                </strong>
                                <ul>
                                    <li>
                                        Please call our
                                        <a href="#">
                                            Customer Service Hotline
                                        </a>
                                        number for details
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="tabPane" id="#tab3">
                        <h3>
                            24/7 Corporate Service Access
                        </h3>
                        <p>
                            &plus;63 2 300 7000
                        </p>
                        <h3>
                            24/7 Consumer Service Access
                        </h3>
                        <p>
                            &plus;63 2 300 1000
                        </p>
                        <h3>
                            Fascimile
                        </h3>
                        <p>
                            &plus;63 2 300 1111
                        </p>
                        <h3>
                            Email
                        </h3>
                        <p>
                            <a href="emailto:customerservice@etpi.com.ph">
                                customerservice@etpi.com.ph
                            </a>
                        </p>
                    </div>
                    <div class="tabPane" id="#tab4">
                        <h3>
                            What are the application requirements for your DSL and other services?
                        </h3>
                        <div class="faq-article-div">
                            <p>
                                a. Valid ID (Government-issued, eg. Passport, Driver's License, UMID)
                                <br>
                                    b. Proof of billing address or barangay certificate
                                    <br>
                                        c. Lease of contract (if resident is leasing/renting)</p>
                        </div>
                        <h3>
                            My account was deactivated, how can I reconnect my subscription?
                        </h3>
                        <div class="faq-article-div">
                            <p>
                                For temporarily disconnected accounts, settlement of outstanding balance and payment of reconnection fee is required.
                                <br>
                                    Reconnection fee can be settled outright or it can be included on the next billing statement for postpaid subscriptions. For
                                    <br>
                                        Permanently disconnected account, a new application will be required, which will be subject for approval.</p>
                        </div>
                        <h3>
                            How do I change my billing address?
                        </h3>
                        <div class="faq-article-div">
                            <p>
                                You may request for a change of billing address by calling our
                                <a href="#">
                                    customer service hotline
                                </a>
                                .
                                <br>
                                    You will need to send the following requirements via email to
                                    <a href="#">
                                        customer service hotline
                                    </a>
                                    <br>
                                        a. Letter of request indicating the old and new billing address
                                        <br>
                                            b. Valid ID (Government-issued, eg. Passport, Driver's License, UMID)
                                            <br>
                                                c. Proof of billing</p>
                        </div>
                        <h3>
                            How do I know my bill's due date?
                        </h3>
                        <div class="faq-article-div">
                            <p>
                                For postpaid accounts, the due date falls every 25th day of the month. You may also refer to your monthly statement of
                                <br>
                                    account for your bill due date.)
                                <br>
                            </p>
                        </div>
                        <h3>
                            Where can I pay my bill?
                        </h3>
                        <div class="faq-article-div">
                            <p>
                                You can view a list of our payment facilities
                                <a href="#">
                                    here
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</main>
<?php include("footer.php"); ?>
