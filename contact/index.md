---
layout: layouts/base.njk
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 5
---

<div class="container-lg d-flex flex-column align-item-center justify-content-center mt-4">
    <h1>Contact</h1>
    <form name="contact" method="POST" data-netlify="true" autocomplete="off" class="needs-validation" novalidate>
        <div class="row g-2">
            <div class="col-md-6 margin-top-form-input-first">
                <div class="form-floating">
                    <input name="first-name" type="text" class="form-control" id="floating-first-name" placeholder="Joe" required />
                    <label for="floating-first-name">First Name</label>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Why you do like this?
                    </div>
                </div>
            </div>
            <div class="col-md-6 ">
                <div class="form-floating">
                    <input name="last-name" type="text" class="form-control" id="floating-last-name" placeholder="Vloggs" required />
                    <label for="floating-last-name">Last Name</label>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Why you do like this?
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-floating">
                    <input name="email" type="email" class="form-control" id="floating-email" placeholder="Joe_Vloggs@example.com" required />
                    <label for="floating-email">Email</label>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Why you do like this?
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-floating">
                    <select name="role" class="form-select form-select-sm pb-2" id="floating-select" aria-label="Select role" required>
                        <option selected disabled value="">Please choose an option</option>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                        <option value="usuper">Usuper</option>
                        <option value="challenger">Challenger</option>
                    </select>
                    <label for="floating-select">Role</label>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Why you do like this?
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-floating">
                    <textarea name="message" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 300px" required></textarea>
                    <label for="floatingTextarea2">Message</label>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Why you do like this?
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="d-grid col-lg-6 col-sm-12 me-auto">
                    <button class="btn btn-outline-primary" type="submit">Send</button>
                </div>
            </div>
        </div>
    </form>
</div>

<script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
</script>
